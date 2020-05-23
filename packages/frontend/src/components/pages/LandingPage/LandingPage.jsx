import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import backgroundPageTurner from '../../../assets/backgroundPageTurner.svg';
import logo from '../../../assets/logo.png';
import CustomTextFieldFilled from '../../common/CustomTextFieldFilled';
import Cards from './Cards';
import Showcase from './Showcase';
import Background from './android.png';
import ios from './ios.png';

const backgroundColor = (theme) => {
  const { primary } = theme.palette;
  const { secondary } = theme.palette;
  return `linear-gradient(90deg, ${primary.main}, ${secondary.main})`;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  backgroundImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: -1,
    position: 'fixed',
  },
  logo: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  submitButton: {
    background: backgroundColor(theme),
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
  description: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(4),
  },
  descText: {
    margin: theme.spacing(5),
  },
  cards: {},
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <img
        src={backgroundPageTurner}
        className={classes.backgroundImage}
        alt="temp"
      />
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={1}
        className={classes.root}
      >
        <Grid item sm={1} xs={4}>
          <img alt="Schola Logo" className={classes.logo} src={logo} />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.quote}
          >
            &ldquo;Let us remember : One book, one pen, one child and one
            teacher can change the world.&rdquo;
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="textSecondary">
            Join us today & manage your student life like never before
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomTextFieldFilled
            label="Enter your email address"
            className={classes.textfield}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={1}>
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
        <Grid item xs={12} className={classes.description}>
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.descText}
          >
            Schola is an essential tool for parents, students and teachers.
            <br />
            Available on your PC, smartphone or tablet
          </Typography>
        </Grid>
        <Cards className={classes.cards} />
        <a href="https://github.com/Joeyryanbridges">
          <img
            src={Background}
            className="githubIcon"
            style={{ width: '50%' }}
          />
        </a>
        <a href="https://github.com/Joeyryanbridges">
          <img src={ios} className="githubIcon" style={{ width: '23%' }} />
        </a>
      </Grid>
    </Container>
  );
};

export default LandingPage;
