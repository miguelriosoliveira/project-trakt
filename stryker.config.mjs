import { stryker } from '@miguelriosoliveira/shared-configs/stryker';

export default {
	...stryker,
	vitest: {
		configFile: 'vitest.config.mts',
	},
};
