import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  Snackbar,
} from '@material-ui/core';
import React from 'react';
import { Alert } from '@material-ui/lab';
import Spinner from 'react-loader-spinner';
import backgroundPageTurner from '../../../assets/backgroundPageTurner.svg';
import logo from '../../../assets/logo.png';
import CustomTextFieldFilled from '../../common/CustomTextFieldFilled';
import Cards from './Cards';
import Showcase from './Showcase';
import Background from './android.png';
import ios from './ios.png';
import sendContactEmail from '../../../api/methods/mail';

const primary = (theme) => theme.palette.primary.main;

const secondary = (theme) => theme.palette.secondary.main;

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
  loading: {},
  logo: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  submitButton: {
    background: `linear-gradient(90deg, ${primary(theme)}, ${secondary(
      theme
    )})`,
    color: 'white',
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
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(4),
  },
  descText: {
    margin: theme.spacing(5),
  },
  cards: {},
  messageTextField: {
    marginTop: theme.spacing(2),
  },
  androidButton: {
    marginTop: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [displayForm, setDisplayForm] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [openToast, setOpenToast] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const contactFormRef = React.createRef();

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = async () => {
    setLoading(true);
    await sendContactEmail(
      email,
      message,
      () => {
        setLoading(false);
        setSuccess(true);
        setOpenToast(true);
        console.log('email', 'sent');
      },
      (err) => {
        setLoading(false);
        setSuccess(false);
        setOpenToast(true);
        console.error(err);
      }
    );
  };

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
            value={email}
            onChange={handleEmailChange}
            className={classes.textfield}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={1}>
          <Button
            variant="contained"
            size="large"
            className={classes.submitButton}
            onClick={() => {
              setDisplayForm(true);
              scrollToContactForm();
            }}
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
        <a
          href="https://github.com/Joeyryanbridges"
          className={classes.androidButton}
        >
          <img alt="android" src={Background} style={{ width: '50%' }} />
        </a>
        <a href="https://github.com/Joeyryanbridges">
          <img
            src={ios}
            alt="ios"
            className="githubIcon"
            style={{ width: '23%' }}
          />
        </a>

        {displayForm && (
          <Grid
            ref={contactFormRef}
            item
            xs={12}
            sm={6}
            md={6}
            container
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12}>
              {loading && <Spinner type="Puff" />}
            </Grid>
            <Grid item xs={12} className={classes.messageTextField}>
              <CustomTextFieldFilled
                label="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                className={classes.textfield}
              />
            </Grid>
            <Grid item xs={12} className={classes.messageTextField}>
              <CustomTextFieldFilled
                value={message}
                label="Enter your message"
                multiline
                rows={5}
                onChange={handleMessageChange}
                className={classes.textfield}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                size="large"
                className={[classes.submitButton, classes.androidButton].join(
                  ' '
                )}
                fullWidth
                onClick={() => {
                  sendEmail();
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={() => {
          setOpenToast(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpenToast(false);
          }}
          severity={success ? 'success' : 'error'}
        >
          {success ? 'Envoyé' : 'Une erreur est survenue'}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LandingPage;
