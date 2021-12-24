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
      <LinearProgress />
    </React.Fragment>
  );
};

export default Home;
