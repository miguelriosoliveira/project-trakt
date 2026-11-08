import * as Sentry from '@sentry/nextjs';

Sentry.init({
	dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
	environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
	release: process.env.VERCEL_GIT_COMMIT_SHA,
	integrations: [Sentry.replayIntegration(), Sentry.feedbackIntegration({ colorScheme: 'system' })],
	tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
