const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  output: "standalone",
};

module.exports = withNextIntl(nextConfig);
