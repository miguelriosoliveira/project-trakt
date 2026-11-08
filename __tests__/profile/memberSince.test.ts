import { describe, expect, it } from 'vitest';

import { formatMemberSince, memberSince, yearToDatePlays } from '@/profile/memberSince';

describe('formatMemberSince', () => {
	it('formats the account date in UTC', () => {
		expect(formatMemberSince(memberSince)).toBe('29 JAN 2013 22:17');
	});

	it('pads a single-digit day and time', () => {
		expect(formatMemberSince(new Date(Date.UTC(2013, 11, 5, 3, 4)))).toBe('05 DEC 2013 03:04');
	});
});

describe('yearToDatePlays', () => {
	it('is the count shown on the home page', () => {
		expect(yearToDatePlays).toBe(2022);
	});
});
