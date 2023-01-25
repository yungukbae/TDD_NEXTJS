/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://yungukbae.github.io/TDD_NEXTJS"
      : "",
};

module.exports = nextConfig;
