/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Box, Button, Typography } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

const buttonStyle = css({
  height: '100vH',
  width: '100vW',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

interface Props {}

const Register: React.FC<Props> = ({}) => {
  return (
    <React.Fragment>
      <Box css={buttonStyle}>
        <Typography variant="h4">Welcome to the server!</Typography>
        <Button type="button" variant="contained" color="primary">
          Server Rendered Button
        </Button>
      </Box>
    </React.Fragment>
  );
};

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Register;
