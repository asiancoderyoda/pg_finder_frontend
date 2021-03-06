/** @jsxRuntime classic /
/* @jsx jsx */
import { Box, darken, FormControl, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { css, jsx } from '@emotion/react';
import { Formik, Form, FormikHelpers } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Email, Lock, Person } from '@mui/icons-material';
import { theme } from '../../styles/theme';
import FormInput from './common/FormInput';
import { RegisterFormData } from '../pages/register';
import { useRouter } from 'next/router';

const cardStyle = css({
  borderRadius: '8px',
  padding: '20px 16px 10px 16px',
  boxShadow: '0px 0px 10px -1px #006464',
  backgroundColor: theme.palette.background.default,
});

const buttonStyle = css({
  margin: '0 0 10px 0',
  minWidth: '320px',
  borderRadius: '2px',
  border: 'none',
  '@media (max-width: 340px)': {
    minWidth: '240px',
  },
});

const linkStyle = css({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  ':hover': {
    color: darken(theme.palette.primary.main, 0.2),
    textDecoration: 'underline',
  },
});

interface Props {
  onSubmit: (
    values: RegisterFormData,
    formikHelpers: FormikHelpers<RegisterFormData>
  ) => void;
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const router = useRouter();
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name should be of minimum 2 characters length')
      .required('Password is required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const initRegister = (
    values: RegisterFormData,
    formikHelpers: FormikHelpers<RegisterFormData>
  ) => {
    onSubmit(values, formikHelpers);
  };

  return (
    <React.Fragment>
      <Box css={cardStyle}>
        <Box marginBottom="12px" paddingLeft="6px">
          <Typography component="h2" fontWeight="bold">
            PG FINDER
          </Typography>
        </Box>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={registerSchema}
          onSubmit={initRegister}
        >
          {({ isSubmitting, errors, handleChange, values }) => (
            <Form id="registerform">
              <FormInput
                name="name"
                label="Full Name"
                type="text"
                value={values.name}
                onChange={handleChange}
                minWidth="320px"
                adornment={<Person />}
              />
              <br />
              <FormInput
                name="email"
                label="Email address"
                type="email"
                value={values.email}
                onChange={handleChange}
                minWidth="320px"
                adornment={<Email />}
              />
              <br />
              <FormInput
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                minWidth="320px"
                adornment={<Lock />}
              />
              <br />
              <FormControl>
                <LoadingButton
                  form="registerform"
                  disableElevation
                  variant="contained"
                  color="primary"
                  type="submit"
                  css={buttonStyle}
                  loading={isSubmitting}
                >
                  Register
                </LoadingButton>
              </FormControl>
            </Form>
          )}
        </Formik>
        <Typography component="a" variant="subtitle2">
          Already registered?{' '}
          <span
            css={linkStyle}
            onClick={() => {
              router.push('/login');
            }}
          >
            Login here
          </span>
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default RegisterForm;
