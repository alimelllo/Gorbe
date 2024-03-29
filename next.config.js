/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const config = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
module.exports = withImages(config);
