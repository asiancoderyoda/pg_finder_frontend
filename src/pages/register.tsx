/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Box } from '@mui/material';
import { FormikHelpers } from 'formik';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { mq } from '../../styles/theme';
import RegisterForm from '../components/registerComponent';
import {
  useRegisterMutation,
  UserNamePasswordInput,
} from '../generated/graphql';
import { FieldErrorParser } from '../util/fieldErrorParser';

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

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

interface Props {}

const Register: React.FC<Props> = ({}) => {
  const [, callRegister] = useRegisterMutation();

  const initRegister = async (
    values: RegisterFormData,
    formikHelpers: FormikHelpers<RegisterFormData>
  ) => {
    try {
      const variables: UserNamePasswordInput = {
        userName: values.name,
        email: values.email,
        password: values.password,
      };
      const response = await callRegister({ options: variables });
      if (response.data?.register.errors) {
        const fieldErrors = FieldErrorParser(response.data.register.errors);
        formikHelpers.setErrors({
          ...fieldErrors,
          name: fieldErrors.userName,
        });
      } else {
        formikHelpers.setValues({
          name: '',
          email: '',
          password: '',
        });
      }
      formikHelpers.setSubmitting(false);
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <Head>
        <title>PG Finder Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box css={pageStyle}>
        <RegisterForm
          onSubmit={(...props) => {
            initRegister(...props);
          }}
        />
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
