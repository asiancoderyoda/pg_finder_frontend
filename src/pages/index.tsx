import React from 'react';
import { Button, Container, Box, Theme } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Box>
          <Button disableElevation color="primary" variant="contained">
            Click Me
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
