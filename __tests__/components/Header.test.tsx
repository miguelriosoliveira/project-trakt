import { Header } from '@/components';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
	it('renders a a header', async () => {
		render(<Header />);
		const header = await screen.findByRole('banner');
		expect(header).toBeInTheDocument();
		expect(header.children).toHaveLength(3);
	});
});
