import React from 'react';
import { Button, Container, Box, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import type { NextPage } from 'next';
import Head from 'next/head';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
  })
);

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Box className={classes.root}>
          <Button disableElevation color="primary" variant="contained">
            Click Me
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
