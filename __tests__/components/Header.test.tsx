import { render, screen } from '@testing-library/react';

import { Header } from '../../src/components';

describe('Header', () => {
	it('renders a a header', async () => {
		render(<Header />);
		const header = screen.getByRole('banner');
		expect(header).toBeInTheDocument();
		expect(header.children.length).toBe(3);
	});
});
