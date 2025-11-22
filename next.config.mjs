/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cfhkfujlnzthrmcfndpm.supabase.co",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "dclaevazetcjjkrzczpc.supabase.co",
        pathname: "/storage/**",
      }
    ]
  }
};

export default nextConfig;
