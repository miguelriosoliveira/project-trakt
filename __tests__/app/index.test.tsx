import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home from '@/app/page';

describe('Home', () => {
	it('renders a heading', async () => {
		render(<Home />);
		expect(await screen.findByText('Hello, Miguel')).toBeInTheDocument();
		expect(screen.getByText('29 JAN 2013 22:17')).toBeInTheDocument();
		expect(screen.getByText('2022')).toBeInTheDocument();
	});
});
