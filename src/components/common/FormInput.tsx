/** @jsxRuntime classic /
/* @jsx jsx */
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField,
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { css, jsx } from '@emotion/react';
import React, { InputHTMLAttributes, ReactElement } from 'react';
import { useField } from 'formik';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  minWidth?: string;
  adornment?: ReactElement<any, any>;
};

const FormInput: React.FC<InputProps> = (props) => {
  const [field, { error }] = useField(props);

  const inputStyle = css({
    margin: '0 0 10px 0',
    minWidth: props.minWidth,
    backgroundColor: '#fff',
    '@media (max-width: 340px)': {
      minWidth: '240px',
    },
  });

  const errorStyle = css({
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '2px',
    marginBottom: '8px',
  });

  return (
    <FormControl>
      {error && (
        <FormHelperText css={errorStyle} id="helper-text">
          <ErrorIcon fontSize="small" />
          {error}
        </FormHelperText>
      )}
      <TextField
        {...field}
        type={props.type}
        id={field.name}
        name={field.name}
        placeholder={props.label}
        value={field.value}
        css={inputStyle}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{props.adornment}</InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default FormInput;
