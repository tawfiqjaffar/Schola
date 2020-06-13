import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  input: { color: theme.palette.grey[300] },
  root: {
    width: '100%',
  },
}));

const CssTextField = withStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}))(TextField);

export default function CustomTextField({ label }) {
  const classes = useStyles();
  return (
    <CssTextField
      className={classes.root}
      variant="outlined"
      label={label}
      InputLabelProps={{
        className: classes.input,
      }}
      InputProps={{
        classes: {
          input: classes.input,
        },
      }}
    />
  );
}

CustomTextField.propTypes = {
  label: PropTypes.string,
};

CustomTextField.defaultProps = {
  label: '',
};
