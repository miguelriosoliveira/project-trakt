/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['github.com', 'trakt.tv', 'walter.trakt.tv'],
	},
};

module.exports = nextConfig;
