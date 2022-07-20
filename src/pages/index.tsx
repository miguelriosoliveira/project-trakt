import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../components';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Project Trakt - Dashboard</title>
			</Head>

			<div className={styles.container}>
				<Header />

				<main>
					<section>
						<h1>Hello, Miguel</h1>
						<p>MEMBER SINCE 29 JAN 2013 22:17</p>
						<p>81d 5h 10m watching</p>
						<p>3,979 episodes (4,009 plays of 117 shows)</p>
						<p>38d 4h 33m watching</p>
						<p>476 movies (498 plays)</p>
					</section>

					<section>
						<h1>Up next to watch</h1>
						<p>tv show next episode</p>
						<p>tv show next episode</p>
						<p>tv show next episode</p>
						<p>tv show next episode</p>
						<p>tv show next episode</p>
						<p>tv show next episode</p>
					</section>

					<section>
						<h1>Upcoming schedule</h1>
						<h3>
							<strong>Sunday</strong>{' '}
							<span className="format-date" data-date="2022-07-24" data-format="l">
								24 Jul
							</span>
						</h3>
						<div className="row">
							<div className="col-md-6 col-sm-4 poster-wrapper hidden-xs">
								<Image
									className="real poster"
									data-show-id="37696"
									data-date="2022-07-24"
									data-original="https://walter.trakt.tv/images/shows/000/037/696/posters/thumb/e1e7375199.jpg.webp"
									src="https://walter.trakt.tv/images/shows/000/037/696/posters/thumb/e1e7375199.jpg.webp"
									style={{ display: 'block', opacity: 1 }}
									width={200}
									height={300}
								/>
								<Image
									className="real poster"
									data-show-id="113946"
									data-date="2022-07-24"
									data-original="https://walter.trakt.tv/images/shows/000/113/946/posters/thumb/e01d2889dd.jpg.webp"
									src="https://walter.trakt.tv/images/shows/000/113/946/posters/thumb/e01d2889dd.jpg.webp"
									style={{ display: 'block', opacity: 1 }}
									width={200}
									height={300}
								/>
							</div>
							<div className="col-md-6 col-sm-8">
								<div
									className="schedule-episode first-show"
									data-date="2022-07-24"
									data-show-id="37696"
								>
									<h4>
										<a href="/shows/one-piece">One Piece</a>
									</h4>
									<h5>
										<a href="/shows/one-piece/seasons/21/episodes/1026">
											<span className="main-title-sxe">
												21x1026 <span className="main-title-abs">(1026)</span>
											</span>{' '}
											<span
												className="main-title"
												data-spoiler-episode-id="6502637"
												data-spoiler-show-id="37696"
											>
												The Supernovas Strike Back! The Mission to Tear Apart the Emperors!
											</span>
										</a>
									</h5>
									<h6>02:30 on Fuji TV</h6>
								</div>
								<div
									className="schedule-episode first-show"
									data-date="2022-07-24"
									data-show-id="113946"
								>
									<h4>
										<a href="/shows/boruto-naruto-next-generations">
											Boruto: Naruto Next Generations
										</a>
									</h4>
									<h5>
										<a href="/shows/boruto-naruto-next-generations/seasons/1/episodes/259">
											<span className="main-title-sxe">1x259</span>{' '}
											<span
												className="main-title"
												data-spoiler-episode-id="6480450"
												data-spoiler-show-id="113946"
											>
												A Wound That Never Heals
											</span>
										</a>
									</h5>
									<h6>10:30 on TV Tokyo</h6>
								</div>
							</div>
						</div>
					</section>

					<section>
						<h1>Last 30 days at a glance</h1>
						<p>cool graphs</p>
					</section>

					<section>
						<h1>Recently watched</h1>
						<p>random tv show ep</p>
						<p>random movie</p>
						<p>random movie 2</p>
					</section>

					<section>
						<h1>Friends activity</h1>
						<p>Follow some Trakt members to see what they&apos;re watching. </p>
					</section>

					<section>
						<h1>TV show recommendations</h1>
						<p>tv show 1</p>
						<p>tv show 2</p>
						<p>tv show 3</p>
					</section>

					<section>
						<h1>Movie recommendations</h1>
						<p>movie 1</p>
						<p>movie 2</p>
						<p>movie 3</p>
					</section>
				</main>

				<footer>
					<h1>FOOTER</h1>
					<p>site map</p>
					<p>social media links</p>
					<p>copyright info</p>
				</footer>
			</div>
		</>
	);
};

export default Home;
