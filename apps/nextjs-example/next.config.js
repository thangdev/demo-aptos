const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  // assetPrefix: "/aptos-wallet-adapter",
  // basePath:"/aptos-wallet-adapter",
  images: { unoptimized: true },
  experimental: {
    transpilePackages: ["wallet-adapter-react", "wallet-adapter-plugin"],
  },
  webpack: (config) => {
    config.resolve.fallback = { "@solana/web3.js": false };
    return config;
  },
};
