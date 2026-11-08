import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('next/font/google', () => ({
	Inter: () => ({ className: 'font-inter' }),
}));

import RootLayout from '@/app/layout';

describe('RootLayout', () => {
	it('renders the header and the page content', () => {
		render(
			<RootLayout>
				<h1>Hello, Miguel</h1>
			</RootLayout>,
		);

		expect(screen.getByRole('banner')).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'Hello, Miguel' })).toBeInTheDocument();
	});
});
