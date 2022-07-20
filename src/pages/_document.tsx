import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					<meta
						name="description"
						content="Trakt clone made with Next.js + TypeScript and the TMDB API"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
