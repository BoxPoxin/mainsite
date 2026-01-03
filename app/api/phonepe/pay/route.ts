import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { amount, orderId, customerId, mobileNumber } = await req.json();

    const merchantId = process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID;
    const saltKey = process.env.PHONEPE_SALT_KEY;
    const saltIndex = process.env.PHONEPE_SALT_INDEX;
    const hostUrl = process.env.PHONEPE_HOST_URL;
    const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/phonepe/callback`;
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/order-confirmation?orderId=${orderId}`;

    if (!merchantId || !saltKey || !saltIndex || !hostUrl) {
      return NextResponse.json({ error: 'PhonePe credentials missing' }, { status: 500 });
    }

    // Create Payload
    const payload = {
      merchantId: merchantId,
      merchantTransactionId: orderId,
      merchantUserId: customerId,
      amount: amount * 100, // Amount in paise
      redirectUrl: redirectUrl,
      redirectMode: "REDIRECT",
      callbackUrl: callbackUrl,
      mobileNumber: mobileNumber || "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE"
      }
    };

    // Encode Payload to Base64
    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');

    // Create X-VERIFY Checksum
    // SHA256(base64Payload + "/pg/v1/pay" + saltKey) + ### + saltIndex
    const stringToHash = base64Payload + "/pg/v1/pay" + saltKey;
    const sha256 = crypto.createHash('sha256').update(stringToHash).digest('hex');
    const checksum = sha256 + "###" + saltIndex;

    // Call PhonePe API
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      body: JSON.stringify({
        request: base64Payload
      })
    };

    const response = await fetch(`${hostUrl}/pg/v1/pay`, options);
    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ 
        url: data.data.instrumentResponse.redirectInfo.url,
        merchantTransactionId: data.data.merchantTransactionId
      });
    } else {
      return NextResponse.json({ error: data.message || 'Payment initiation failed' }, { status: 400 });
    }

  } catch (error) {
    console.error('PhonePe Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
