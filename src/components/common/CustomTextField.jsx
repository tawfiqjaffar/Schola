import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(({
  input: { color: 'white' },
  root: {
    // width: '100%',
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

export default function CustomTextField() {
  const classes = useStyles();
  return (
    <CssTextField
      className={classes.root}
      variant="outlined"
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
