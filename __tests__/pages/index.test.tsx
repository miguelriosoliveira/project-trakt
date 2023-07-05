import { render, screen } from '@testing-library/react';

import Home from '../../src/pages/index';

describe('Home', () => {
	it('renders a heading', async () => {
		render(<Home />);
		const header = await screen.findByRole('banner');
		expect(header).toBeInTheDocument();
	});
});
