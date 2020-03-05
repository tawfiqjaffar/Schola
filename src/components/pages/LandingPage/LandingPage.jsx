import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Showcase from './Showcase';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  showcase: {
    marginTop: theme.spacing(4),
  },
  quote: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h2" color="textSecondary">Schola</Typography>
      <Typography variant="h5" color="textSecondary" className={classes.quote}>
        &ldquo;Let us remember: One book, one pen, one child and one teacher
        can change the world.&rdquo;
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Join us today & manage your student life like never before
      </Typography>
      <Showcase className={classes.showcase} />
    </Container>
  );
};

export default LandingPage;
