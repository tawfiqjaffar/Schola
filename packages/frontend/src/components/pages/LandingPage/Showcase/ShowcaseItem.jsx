import { Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
  img: {
    width: '100%',
    top: 0,
    left: 0,
    objectFit: 'cover',
  },
}));

const ShowcaseItem = (props) => {
  const { asset } = props;
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={6}>
        <img src={asset} className={classes.img} alt="iOS Screenshot" />
        {/* <Paper className={classes.paper}>
          <Typography variant="h2">{name}</Typography>
          <Typography variant="body">{description}</Typography>
        </Paper> */}
      </Grid>
    </Grid>
  );
};

ShowcaseItem.propTypes = {
  asset: PropTypes.string.isRequired,
};

export default ShowcaseItem;
