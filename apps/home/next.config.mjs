/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/vending",
        destination: `${process.env.VENDING_URL}/vending`,
      },
      {
        source: "/vending-static/_next/:path+",
        destination: `${process.env.VENDING_URL}/vending-static/_next/:path+`,
      },
      {
        source: "/advertise",
        destination: `${process.env.ADVERTISE_URL}/advertise`,
      },
      {
        source: "/advertise-static/_next/:path+",
        destination: `${process.env.ADVERTISE_URL}/advertise-static/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
