import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { merchantTransactionId } = await req.json();

    const merchantId = process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID;
    const saltKey = process.env.PHONEPE_SALT_KEY;
    const saltIndex = process.env.PHONEPE_SALT_INDEX;
    const hostUrl = process.env.PHONEPE_HOST_URL;

    if (!merchantId || !saltKey || !saltIndex || !hostUrl) {
      return NextResponse.json({ error: 'PhonePe credentials missing' }, { status: 500 });
    }

    // Check Status API
    // SHA256("/pg/v1/status/{merchantId}/{merchantTransactionId}" + saltKey) + "###" + saltIndex
    const stringToHash = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + saltKey;
    const sha256 = crypto.createHash('sha256').update(stringToHash).digest('hex');
    const checksum = sha256 + "###" + saltIndex;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': merchantId
      }
    };

    const response = await fetch(`${hostUrl}/pg/v1/status/${merchantId}/${merchantTransactionId}`, options);
    const data = await response.json();

    if (data.success && data.code === 'PAYMENT_SUCCESS') {
      return NextResponse.json({ status: 'SUCCESS', data: data.data });
    } else {
      return NextResponse.json({ status: 'FAILURE', message: data.message || 'Payment failed' });
    }

  } catch (error) {
    console.error('PhonePe Status Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
