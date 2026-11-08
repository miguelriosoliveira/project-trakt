import { withSentryConfig } from '@sentry/nextjs/config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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

export default withSentryConfig(nextConfig, {
	silent: !process.env.CI,
	widenClientFileUpload: true,
	tunnelRoute: '/monitoring',
});
