import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const Input: React.FC<TextFieldProps> = (props) => {
  const defaultProps = {
    margin: 'none' as any,
    variant: 'filled' as any,
    fullWidth: true,
  };
  return <TextField {...defaultProps} {...props} />;
};

export default Input;
