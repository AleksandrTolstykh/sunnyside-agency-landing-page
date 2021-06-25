import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    marginBottom: 100,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  content: {
    color: 'hsl(213, 9%, 39%)',
    fontFamily: 'Barlow',
    fontWeight: 600,
    margin: 50,
  },
  author: {
    color: 'hsl(212, 27%, 19%)',
    fontFamily: 'Fraunces',
    fontWeight: 700,
    fontSize: 20,
  },
  occupation: {
    color: 'hsl(210, 4%, 67%)',
    fontFamily: 'Barlow',
    fontWeight: 600,
    fontSize: 12,
  },
}));

function Testimonial(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container justify='center'>
        <Avatar src={props.avatar} className={classes.avatar} />
      </Grid>
      <p className={classes.content}>{props.content}</p>
      <h3 className={classes.author}>{props.author}</h3>
      <h5 className={classes.occupation}>{props.occupation}</h5>
    </Container>
  );
}

export default Testimonial;
