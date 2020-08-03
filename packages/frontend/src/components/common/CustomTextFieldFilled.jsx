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

export default function CustomTextFieldFilled(props) {
  const { label, type, value, onChange, multiline, rows } = props;
  const classes = useStyles();
  return (
    <CssTextField
      className={classes.root}
      label={label}
      type={type}
      onChange={onChange}
      value={value}
      variant="filled"
      rows={rows}
      multiline={multiline}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

CustomTextFieldFilled.defaultProps = {
  label: '',
  type: '',
  value: '',
  onChange: () => {},
  multiline: false,
  rows: 1,
};
