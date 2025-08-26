/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // cần khi export
  // Nếu deploy vào project site (không phải <user>.github.io):
  // basePath: '/<ten-repo>',
  // assetPrefix: '/<ten-repo>/',
};
export default nextConfig;