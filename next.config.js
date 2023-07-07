/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: "http://localhost:3001",
  },
};

module.exports = nextConfig;
