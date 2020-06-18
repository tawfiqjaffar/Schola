import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    TextField,
    Button,
    Grid,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    Popover
} from '@material-ui/core';

function QuizzForm(props) {
    return (
        <Grid container item md={8} className="quizz-form">
            <Grid item md={12} xs={12}>

{/* map on config props to get choice by choice */}
                {props.config.map(quizz => (
                    <React.Fragment>
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
                                <RadioGroup aria-label="gender" name="gender1" value={quizz.state} onChange={quizz.handleChange}>
                                    {/* map on value off quizz to display all option */}
                                    {quizz.value.map((el, key) => {
                                        return (
                                            <FormControlLabel value={el.value} control={<Radio />} label={el.label} />
                                        )
                                    }
                                    )}
                                </RadioGroup>
                            </FormControl>
                        </Popover>
                        {quizz.text2}
                    </React.Fragment>
                ))}
            </Grid>
        </Grid>
    )
}

export default QuizzForm;