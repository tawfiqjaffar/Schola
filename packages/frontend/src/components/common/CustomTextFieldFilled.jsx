import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  inputHint: { color: theme.palette.text.hint },
  inputFocused: { color: theme.palette.text.primary },
  root: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
}));

const CssTextField = withStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: theme.palette.text.primary,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.light,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}))(TextField);

export default function CustomTextFieldFilled({ label, type }) {
  const classes = useStyles();
  return (
    <CssTextField
      className={classes.root}
      label={label}
      type={type}
      variant="filled"
      InputLabelProps={{
        className: classes.inputHint,
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.inputFocused,
        },
      }}
    />
  );
}

CustomTextFieldFilled.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

CustomTextFieldFilled.defaultProps = {
  label: '',
  type: '',
};
