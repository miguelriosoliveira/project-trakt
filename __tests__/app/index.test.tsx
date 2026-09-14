import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
	it('renders a heading', async () => {
		render(<Home />);
		const h1 = await screen.findByText('Hello, Miguel');
		expect(h1).toBeInTheDocument();
	});
});
