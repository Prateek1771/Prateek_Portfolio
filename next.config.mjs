/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['tegaki'],
  webpack(config) {
    config.module.rules.push({
      test: /\.ttf$/,
      type: 'asset/resource',
    })
    return config
  },
};

export default nextConfig;
