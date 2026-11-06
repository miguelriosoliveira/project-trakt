import { createElement, type ReactNode } from 'react';
import { vi } from 'vitest';

import '@testing-library/jest-dom/vitest';

vi.mock('next/image', () => ({
	default: (props: { alt: string; src: string }) => createElement('img', props),
}));

vi.mock('next/link', () => ({
	default: ({ children, href }: { children: ReactNode; href: string }) =>
		createElement('a', { href }, children),
}));
