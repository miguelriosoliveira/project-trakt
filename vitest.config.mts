import { fileURLToPath } from 'node:url';

import { coverage } from '@miguelriosoliveira/shared-configs/vitest/react';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': `${rootDir}src`,
		},
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		coverage,
	},
});
