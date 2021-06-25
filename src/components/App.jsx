import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NavigationBar from './NavigationBar';
import LearnMore from './LearnMore';
import Picture from './Picture';
import Testimonial from './Testimonial';
import Contacts from './Contacts';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  item1: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  item3: {
    order: 3,
  },
  item4: {
    order: 4,
  },
  item5: {
    order: 5,
  },
  item6: {
    order: 6,
  },
  testimonialsHeader: {
    color: 'hsl(210, 4%, 67%)',
    fontFamily: 'Fraunces',
    fontWeight: 900,
    fontSize: 20,
    letterSpacing: 5,
    margin: 100,
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box>
     <NavigationBar />
     <Grid container spacing={0}>
      <Grid className={classes.item1} item xs={12} md={6}>
        <LearnMore
         title='Transform your brand'
         content='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
         lineColor='hsl(51, 100%, 49%, 0.5)'
         lineColorHover='hsl(51, 100%, 49%)'
        />
      </Grid>
      <Grid className={classes.item2} item xs={12} md={6}>
        <img src='images/desktop/image-transform.jpg' alt='transform' width='100%' />
      </Grid>
      <Grid className={classes.item3} item xs={12} md={6}>
        <img src='images/desktop/image-stand-out.jpg' alt='stand-out' width='100%' />
      </Grid>
      <Grid className={classes.item4} item xs={12} md={6}>
        <LearnMore
         title='Stand out to the right audience'
         content='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
         lineColor='hsl(7, 99%, 70%, 0.5)'
         lineColorHover='hsl(7, 99%, 70%)'
        />
      </Grid>
      <Grid className={classes.item5} item xs={12} md={6}>
        <Picture
          image='image-graphic-design.jpg'
          color='hsl(167, 40%, 24%)'
          title='Graphic design'
          content='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
        />
      </Grid>
      <Grid className={classes.item6} item xs={12} md={6}>
        <Picture
          image='image-photography.jpg'
          color='hsl(198, 62%, 26%)'
          title='Photography'
          content='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
        />
      </Grid>
     </Grid>
      <h1 className={classes.testimonialsHeader}>CLIENT TESTIMONIALS</h1>
      <Grid container>
       <Grid item xs={12} md={4}>
        <Testimonial
          avatar='images/image-emily.jpg'
          content='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
          author='Emily R.'
          occupation='Marketing Director'
        />
       </Grid>
       <Grid item xs={12} md={4}>
         <Testimonial
           avatar='images/image-thomas.jpg'
           content='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
           author='Thomas S.'
           occupation='Chief Operating Officer'
         />
       </Grid>
       <Grid item xs={12} md={4}>
         <Testimonial
           avatar='images/image-jennie.jpg'
           content='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
           author='Jennie F.'
           occupation='Business Owner'
         />
       </Grid>
     </Grid>
     <Grid container>
      <Grid item xs={6} md={3}>
        <img src='images/desktop/image-gallery-milkbottles.jpg' alt='milkbottles' width='100%' />
      </Grid>
      <Grid item xs={6} md={3}>
        <img src='images/desktop/image-gallery-orange.jpg' alt='orange' width='100%' />
      </Grid>
      <Grid item xs={6} md={3}>
        <img src='images/desktop/image-gallery-cone.jpg' alt='cone' width='100%' />
      </Grid>
      <Grid item xs={6} md={3}>
        <img src='images/desktop/image-gallery-sugarcubes.jpg' alt='sugarcubes' width='100%' />
      </Grid>
     </Grid>
     <Contacts />
      <Grid container justify='center'>
        <Footer />
      </Grid>
    </Box>
  );
}

export default App;
