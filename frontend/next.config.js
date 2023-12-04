const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
  // apiTimeout: 10000, // Set timeout limit to 10 seconds
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  images: {
    // domains: ["img.seadn.io"],
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
