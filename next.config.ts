// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const withImages = require('next-images');
const nextConfig = withImages({
  webpack(config, options) {
    return config;
  },
  reactStrictMode: true,
});

export default nextConfig;
