import type { NextPage } from 'next';
import Head from 'next/head';
import { FiBarChart2, FiChevronRight } from 'react-icons/fi';

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
					<section className={styles.userInfoWrapper}>
						<div className={styles.posterBgWrapper}>
							<div className={styles.posterBg} />
						</div>

						<div className={styles.userInfo}>
							<h1>Hello, Miguel</h1>

							<div>
								<span>MEMBER SINCE</span>
								<span>29 JAN 2013 22:17</span>
							</div>

							<div className={styles.yearToDate}>
								<FiBarChart2 size={32} strokeWidth={3} />
								<span className={styles.year}>2022</span>
								<div className={styles.text}>
									<p>YEAR</p>
									<p>TO DATE</p>
								</div>
								<FiChevronRight size={16} strokeWidth={3} />
							</div>
						</div>

						<div className={styles.stats} />
					</section>
				</main>
			</div>
		</>
	);
};

export default Home;
