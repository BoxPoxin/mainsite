/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/maker',
        destination: 'https://boxpox-2.myshopify.com',
        permanent: false,
      },
      {
        source: '/signin',
        destination: '/',
        permanent: false,
      },
      {
        source: '/signup',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
