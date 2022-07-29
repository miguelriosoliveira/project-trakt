import type { NextPage } from 'next';
import Head from 'next/head';

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
			</div>
		</>
	);
};

export default Home;
