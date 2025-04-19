/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode helps identify potential problems in an application.
  // It activates additional checks and warnings for its descendants.
  reactStrictMode: true,

  // Configure how Next.js handles outputting the application.
  // 'standalone' bundles only the necessary files for deployment,
  // reducing the size of the Docker image.
  output: 'standalone',

  // Experimental features can be enabled here if needed.
  // experimental: {
  //   // Example: Enable appDir if using the App Router (default in newer versions)
  //   appDir: true,
  // },
};

export default nextConfig; 