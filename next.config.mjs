/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/myPortfolio/" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/myPortfolio/" : "",
};

module.exports = nextConfig;
