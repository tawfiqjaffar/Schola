import React from 'react';
import clsx from 'clsx';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'center',
  },
  paper: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fixedHeight: {
    height: '240px',
  },
  background: {
    background: 'white',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  const fixedHeightPaper = clsx(
    classes.paper,
    classes.fixedHeight,
    classes.background
  );
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <img src={require('./avatar.png')} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <Paper className={fixedHeightPaper}>Infos_etudiant</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <AppBar position="static" color="default" component={Paper}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Graphique des moyenes" {...a11yProps(0)} />
                  <Tab label="Notes/Evaluations" {...a11yProps(1)} />
                  <Tab label="Messages" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                //axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction} />
                <TabPanel value={value} index={1} dir={theme.direction}>
                  Evaluation de mathématique du 15/03 : 14.2 Evaluation de
                  français du 12/03 : 4.3
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  Item Three
                </TabPanel>
              </SwipeableViews>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={9}>
            <Paper className={fixedHeightPaper}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Cours</TableCell>
                      <TableCell align="right">Horaires</TableCell>
                      <TableCell align="right">Matiere</TableCell>
                      <TableCell align="right">Professeur</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <AppBar position="static" color="default" component={Paper}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Absences" {...a11yProps(0)} />
                  <Tab label="Sanctions" {...a11yProps(1)} />
                  <Tab label="Messages" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                //axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  Abdel a été absent le 23/03/2000 au cours de Mathématiques
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  2h de colle le mercredi 26/03/2000 de 14h à 15h en salle de
                  permanence
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  Item Three
                </TabPanel>
              </SwipeableViews>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
