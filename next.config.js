/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  images: {
    domains: [
      "mediaim.expedia.com",
      "img.redbull.com",
      "cdn-kcapn.nitrocdn.com",
      "i0.wp.com",
      "www.kiwi.com",
      "www.travelandleisure.com",
    ],
  },
};

module.exports = nextConfig;
