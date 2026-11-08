const months = [
	'JAN',
	'FEB',
	'MAR',
	'APR',
	'MAY',
	'JUN',
	'JUL',
	'AUG',
	'SEP',
	'OCT',
	'NOV',
	'DEC',
] as const;

export const memberSince = new Date(Date.UTC(2013, 0, 29, 22, 17));

export const yearToDatePlays = 2022;

export function formatMemberSince(date: Date): string {
	const day = String(date.getUTCDate()).padStart(2, '0');
	const month = months[date.getUTCMonth()];
	const year = String(date.getUTCFullYear());
	const hours = String(date.getUTCHours()).padStart(2, '0');
	const minutes = String(date.getUTCMinutes()).padStart(2, '0');

	return `${day} ${month} ${year} ${hours}:${minutes}`;
}
