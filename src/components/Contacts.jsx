import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';
import { CustomFaceBookIcon, CustomTwitterIcon, CustomPinterestIcon, CustomInstagramIcon } from './Icons';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(168, 34%, 41%)',
    padding: 50,
    textAlign: 'center',
  },
  logo: {
    opacity: 0.5,
  },

}));

function Contacts() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src='images/logo.svg' alt='logo' className={classes.logo} />
      <Grid container justify='center'>
        <Grid item>
          <CustomButton
            content='About'
            background='transparent'
            backgroundHover='transparent'
            border='transparent'
            color='hsl(167, 40%, 24%)'
            colorHover='hsl(0, 0%, 100%)'
          />
        </Grid>
        <Grid item>
          <CustomButton
            content='Services'
            background='transparent'
            backgroundHover='transparent'
            border='transparent'
            color='hsl(167, 40%, 24%)'
            colorHover='hsl(0, 0%, 100%)'
          />
        </Grid>
        <Grid item>
          <CustomButton
            content='Projects'
            background='transparent'
            backgroundHover='transparent'
            border='transparent'
            color='hsl(167, 40%, 24%)'
            colorHover='hsl(0, 0%, 100%)'
          />
        </Grid>
      </Grid>
      <Grid container justify='center' spacing={5}>
        <Grid item>
          <CustomFaceBookIcon />
        </Grid>
        <Grid item>
          <CustomInstagramIcon />
        </Grid>
        <Grid item>
          <CustomTwitterIcon />
        </Grid>
        <Grid item>
          <CustomPinterestIcon />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contacts;
