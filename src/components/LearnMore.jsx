import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import LearnMoreButton from './LearnMoreButton';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 100,
    marginTop: '25%',
    [theme.breakpoints.down('md')]: {
      marginTop: '10%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
      textAlign: 'center',
    },
  },
  title: {
    color: 'hsl(212, 27%, 19%)',
    fontFamily: 'Fraunces',
    fontSize: 40,
    fontWeight: 900,
  },
  content: {
    color: 'hsl(210, 4%, 67%)',
    fontFamily: 'Barlow',
    fontSize: 16,
    fontWeight: 600,
  },
}));

function LearnMore(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.content}>{props.content}</p>
      <LearnMoreButton
        lineColor={props.lineColor}
        lineColorHover={props.lineColorHover}
      />
    </Box>
  );
}

export default LearnMore;
