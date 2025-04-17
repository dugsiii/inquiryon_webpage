import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpackDevMiddleware: (config: {
      watchOptions: {
        poll: number; // Check for file changes every 1s
        aggregateTimeout: number;
      };
    }) => {
    config.watchOptions = {
      poll: 1000,            // Check for file changes every 1s
      aggregateTimeout: 300, // Delay before rebuilding
    };
    return config;
  },
};

export default nextConfig;
