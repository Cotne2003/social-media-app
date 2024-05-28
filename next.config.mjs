/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for handling images
  images: {
    // Define remote patterns for allowed image sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**", // Adjust the pathname pattern as needed
      },
    ],
  },
};

export default nextConfig;
