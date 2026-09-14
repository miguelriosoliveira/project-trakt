/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
