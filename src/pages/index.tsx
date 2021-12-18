import { Button, Container, Box, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }
  })
);

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <Container>
      
    </Container>
  );
};

export default Home;
