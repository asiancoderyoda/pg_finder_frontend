/** @jsxRuntime classic /
/* @jsx jsx */
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  SvgIconTypeMap,
  TextField,
} from '@mui/material';
import { css, jsx } from '@emotion/react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { InputHTMLAttributes, ReactElement } from 'react';
import { useField } from 'formik';

// Test Main Branch commit

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
  });

  return (
    <FormControl>
      <TextField
        {...field}
        type={field.name}
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
      {error && <FormHelperText id="email-helper-text">{error}</FormHelperText>}
    </FormControl>
  );
};

export default FormInput;
