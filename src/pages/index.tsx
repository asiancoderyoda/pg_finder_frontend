import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { LinearProgress } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>PG Finder Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LinearProgress />
    </React.Fragment>
  );
};

export default Home;
