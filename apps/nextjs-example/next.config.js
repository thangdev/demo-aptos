const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: "/aptos-mint-nft",
  basePath:"/aptos-mint-nft",
  images: { unoptimized: true },
  experimental: {
    transpilePackages: ["wallet-adapter-react", "wallet-adapter-plugin"],
  },
  webpack: (config) => {
    config.resolve.fallback = { "@solana/web3.js": false };
    return config;
  },
};
