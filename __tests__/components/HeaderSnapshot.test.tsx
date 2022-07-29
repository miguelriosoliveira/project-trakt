import { render } from '@testing-library/react';

import { Header } from '../../src/components';

it('renders Header unchanged', () => {
	const { container } = render(<Header />);
	expect(container).toMatchSnapshot();
});
