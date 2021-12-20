/** @jsxRuntime classic /
/* @jsx jsx */
import {
  Box,
  Button,
  darken,
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { css, jsx, useTheme } from '@emotion/react';
import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Email, Lock } from '@mui/icons-material';
import { theme } from '../../styles/theme';

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
});

const inputStyle = css({
  margin: '0 0 10px 0',
  minWidth: '320px',
  backgroundColor: '#fff',
});

const linkStyle = css({
  color: theme.palette.primary.main,
  cursor: 'pointer',
});

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignUpForm = () => {
  return (
    <React.Fragment>
      <Box css={cardStyle}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting, setValues }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setValues({
                email: '',
                password: '',
              });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, errors, handleChange, values }) => (
            <Form id="loginform">
              <FormControl>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleChange}
                  css={inputStyle}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormHelperText id="email-helper-text">
                  {errors.email}
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  css={inputStyle}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormHelperText id="password-helper-text">
                  {errors.password}
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl>
                <Button
                  form="loginform"
                  disableElevation
                  variant="contained"
                  color="primary"
                  type="submit"
                  css={buttonStyle}
                  disabled={isSubmitting}
                >
                  Sign Up
                </Button>
              </FormControl>
            </Form>
          )}
        </Formik>
        <Typography component="a" variant="subtitle2">
          Already signed up?{' '}
          <span css={linkStyle} onClick={() => {}}>
            Login here
          </span>
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default SignUpForm;
