import {
  Button, Container, Grid, makeStyles, Typography,
} from '@material-ui/core';
import React from 'react';
import backgroundSwirl from '../../../assets/backgroundSwirl.svg';
import CustomTextField from '../../common/CustomTextField';
import Showcase from './Showcase';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: -1,
    position: 'absolute',
  },
  submitButton: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  textfield: {
    width: '100%',
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
      <img
        src={backgroundSwirl}
        className={classes.backgroundImage}
        alt="temp"
      />
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" color="textSecondary">Schola logo</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" color="textSecondary" className={classes.quote}>
            &ldquo;Let us remember: One book, one pen, one child and one teacher
            can change the world.&rdquo;
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="textSecondary">
            Join us today & manage your student life like never before
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <CustomTextField label="Enter your email address" className={classes.textfield} />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            size="large"
            className={classes.submitButton}
            fullWidth
          >
            Go
          </Button>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Showcase className={classes.showcase} />
        </Grid>
      </Grid>

    </Container>
  );
};

export default LandingPage;
