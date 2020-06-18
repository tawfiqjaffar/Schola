import React from 'react';

import {
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Popover,
} from '@material-ui/core';

import PropTypes from 'prop-types';

function QuizzForm(props) {
  const { config } = props;
  return (
    <Grid container item md={8} className="quizz-form">
      <Grid item md={12} xs={12}>
        {/* map on config props to get choice by choice */}
        {config.map((quizz) => (
          <>
            {quizz.text1}
            <Button
              variant="outlined"
              style={{ color: 'white', borderColor: 'white' }}
              onClick={quizz.handleClick}
              className="quizz-btn"
            >
              {quizz.choix}
            </Button>
            <Popover
              open={quizz.open}
              anchorEl={quizz.anchorEl}
              onClose={quizz.handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <FormControl component="fieldset" className="popover-container">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={quizz.state}
                  onChange={quizz.handleChange}
                >
                  {/* map on value off quizz to display all option */}
                  {quizz.value.map((el) => (
                    <FormControlLabel
                      value={el.value}
                      control={<Radio />}
                      label={el.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Popover>
            {quizz.text2}
          </>
        ))}
      </Grid>
    </Grid>
  );
}

QuizzForm.propTypes = {
  config: PropTypes.array.isRequired,
};

export default QuizzForm;
