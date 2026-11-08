const memberSinceFormat = new Intl.DateTimeFormat('en-GB', {
	timeZone: 'UTC',
	day: '2-digit',
	month: 'short',
	year: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	hourCycle: 'h23',
});

export const memberSince = new Date(Date.UTC(2013, 0, 29, 22, 17));

export const yearToDatePlays = 2022;

export function formatMemberSince(date: Date): string {
	const parts: Record<string, string> = Object.fromEntries(
		memberSinceFormat.formatToParts(date).map(part => [part.type, part.value]),
	);

	return `${parts.day} ${parts.month.toUpperCase()} ${parts.year} ${parts.hour}:${parts.minute}`;
}
