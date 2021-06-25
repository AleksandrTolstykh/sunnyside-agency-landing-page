import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';
import NavigationMenu from './NavigationMenu';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(images/desktop/image-header.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 800,
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url(images/mobile/image-header.jpg)',
    },
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Fraunces',
    fontWeight: 900,
    fontSize: 50,
    color: 'hsl(0, 0%, 100%)',
    marginTop: 130,
    letterSpacing: 10,
  },
  arrow: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 120,
  }
}));

function NavigationBar() {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Container>
        <Toolbar>
          <Grid container justify="flex-start">
            <img src='images/logo.svg' alt='logo' />
          </Grid>
          <Grid container justify="flex-end">
            <Hidden smDown>
              <CustomButton
                content='About'
                background='transparent'
                backgroundHover='transparent'
                border='transparent'
                color='hsl(0, 0%, 100%)'
                colorHover='hsl(0, 0%, 100%)'
              />
              <CustomButton
                content='Services'
                background='transparent'
                backgroundHover='transparent'
                border='transparent'
                color='hsl(0, 0%, 100%)'
                colorHover='hsl(0, 0%, 100%)'
              />
              <CustomButton
                content='Projects'
                background='transparent'
                backgroundHover='transparent'
                border='transparent'
                color='hsl(0, 0%, 100%)'
                colorHover='hsl(0, 0%, 100%)'
              />
              <CustomButton
                content='CONTACT'
                background='hsl(0, 0%, 100%)'
                backgroundHover='transparent'
                border='transparent'
                color='hsl(212, 27%, 19%)'
                colorHover='hsl(0, 0%, 100%)'
              />
            </Hidden>
            <Hidden mdUp>
              <NavigationMenu />
            </Hidden>
          </Grid>
        </Toolbar>
        <h1 className={classes.header}>WE ARE CREATIVES</h1>
        <Container className={classes.arrow}>
          <img src='images/icon-arrow-down.svg' alt='arrow-down' />
        </Container>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
