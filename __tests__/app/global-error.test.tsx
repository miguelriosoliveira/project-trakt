import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const { captureException } = vi.hoisted(() => ({
	captureException: vi.fn(),
}));

vi.mock('@sentry/nextjs', () => ({
	captureException,
}));

import GlobalError from '@/app/global-error';

describe('GlobalError', () => {
	it('reports each render error to Sentry', () => {
		const error = new Error('render failed');
		const { rerender } = render(<GlobalError error={error} />);

		expect(captureException).toHaveBeenCalledWith(error);

		const nextError = new Error('render failed again');
		rerender(<GlobalError error={nextError} />);

		expect(captureException).toHaveBeenCalledWith(nextError);
	});
});
