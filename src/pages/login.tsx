/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Box } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { mq, theme } from '../../styles/theme';
import LoginForm from '../components/loginComponent';

const imgUrl =
  'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-lukestackpoole4-shibuya-crossing-eye-02.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ffd4eca7f7c40958d02cbd0ba41cb332';

const pageStyle = css(
  mq({
    height: '100vH',
    width: '100vW',
    display: 'flex',
    justifyContent: ['center', 'center', 'flex-start', 'flex-start'],
    alignItems: 'center',
    padding: [0, 0, '120px', '180px'],
    background: `linear-gradient(to left, rgba(255,255,255,0) 0%,
             rgba(255,255,255,1) 100%), url(${imgUrl});`,
    backgroundSize: 'cover',
  })
);

interface Props {}

const Login: React.FC<Props> = ({}) => {
  return (
    <React.Fragment>
      <Box css={pageStyle}>
        <LoginForm />
      </Box>
    </React.Fragment>
  );
};

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default Login;
