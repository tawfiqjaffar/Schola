import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, makeStyles, Paper, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  icon: {
    marginBottom: theme.spacing(1),
    fontSize: 80,
    color: 'white',
  },
}));

const CardItem = ({ icon, title, description }) => {
  const classes = useStyles();
  const Icon = icon;

  return (
    <Grid item xs={12} sm={4}>
      <Paper className={classes.root}>
        <Icon className={classes.icon} />
        <Typography variant="h5" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="body" color="textSecondary">
          {description}
        </Typography>
      </Paper>
    </Grid>
  );
};

CardItem.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardItem;
