/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cfhkfujlnzthrmcfndpm.supabase.co',
				pathname: '/storage/**',
			},
			{
				protocol: 'https',
				hostname: 'dclaevazetcjjkrzczpc.supabase.co',
				pathname: '/storage/**',
			},
		],

		domains: ['lh3.googleusercontent.com'], // <-- whitelist Google images
	},
};

export default nextConfig;
