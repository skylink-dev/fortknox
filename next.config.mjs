/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '103.183.241.194',
        port: '8080',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
