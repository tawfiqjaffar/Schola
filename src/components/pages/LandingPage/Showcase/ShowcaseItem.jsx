import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper, Typography, Grid, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const ShowcaseItem = (props) => {
  const { name } = props;
  const { description } = props;
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={9}>
        <Paper className={classes.paper}>
          <Typography variant="h2">{name}</Typography>
          <Typography variant="body">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

ShowcaseItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ShowcaseItem;
