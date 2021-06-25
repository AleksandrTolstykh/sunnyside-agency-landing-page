import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

function Picture(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundImage: 'url(images/desktop/' + props.image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      color: props.color,
      marginTop: 0,
      paddingTop: 350,
      paddingBottom: 50,
      paddingLeft: '25%',
      paddingRight: '25%',
    },
    title: {
      fontFamily: 'Fraunces',
      fontSize: 32,
      fontWeight: 900,
    },
    content: {
      fontFamily: 'Barlow',
      fontSize: 16,
      fontWeight: 600,
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.content}>{props.content}</p>
    </Box>
  );
}

export default Picture;
