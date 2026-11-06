import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Header } from '@/components';

describe('Header', () => {
	it('renders a a header', async () => {
		render(<Header />);
		const header = await screen.findByRole('banner');
		expect(header).toBeInTheDocument();
		expect(header.children).toHaveLength(3);
	});
});
