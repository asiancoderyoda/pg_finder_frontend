/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Box } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { mq, theme } from '../../styles/theme';
import SignUpForm from '../components/registerComponent';

const pageStyle = css(
  mq({
    height: '100vH',
    width: '100%',
    display: 'flex',
    justifyContent: ['center', 'center', 'flex-start', 'flex-start'],
    alignItems: 'center',
    padding: ['auto 6px', 'auto 12px', 'auto 180px', 'auto 180px'],
    backgroundImage: 'linear-gradient(to left, #e9f5db, #F5F7FA)',
  })
);

interface Props {}

const Register: React.FC<Props> = ({}) => {
  return (
    <React.Fragment>
      <Box padding="200px" css={pageStyle}>
        <SignUpForm />
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
