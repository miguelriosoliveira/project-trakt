import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
	it('renders a heading', async () => {
		render(<Home />);
		const h1 = await screen.findByText('Hello, Miguel');
		expect(h1).toBeInTheDocument();
	});
});
