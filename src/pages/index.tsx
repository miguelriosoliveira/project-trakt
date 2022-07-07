import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Trakt</title>
        <meta
          name="description"
          content="Trakt clone made with Next.js + TypeScript and the TMDB API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>hello world</h1>
      </main>
    </div>
  );
};

export default Home;
