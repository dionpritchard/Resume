import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



const homePageStyling = makeStyles({
  root: {
    color: '#444',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


  },
  textfield: {
    flexBasis: '25%',
  },
});

function Contact () {
	const classes = homePageStyling()
	return (
    <React.Fragment>


    <Typography variant='h1'>h1 Leave a message</Typography>
    <h1 style={{fontFamily: 'Roboto Condensed'}}>h1 Leave a message</h1>
    <Typography variant='h2'>h2 Leave a message</Typography>
    <h2 style={{fontFamily: 'Roboto Condensed'}}>h2 Leave a message</h2>
    <Typography variant='h3'>h3 Leave a message</Typography>
    <h3 style={{fontFamily: 'Roboto Condensed'}}>h3 Leave a message</h3>
    <Typography variant='h4'>h4 Leave a message</Typography>
    <h4 style={{fontFamily: 'Roboto Condensed'}}>h4 Leave a message</h4>
    <Typography variant='h5'>h5 Leave a message</Typography>
    <h5 style={{fontFamily: 'Roboto Condensed'}}>h5 Leave a message</h5>
    <Typography variant='h6'>h6 Leave a message</Typography>
    <h6 style={{fontFamily: 'Roboto Condensed'}}>h6 Leave a message</h6>



		<form className={classes.root}>
      <TextField id='email' label='Email' aria-label='Your Email' className={classes.textfield} />
      <TextField id='name' label='Name' aria-label='Your Name' className={classes.textfield} />
      <TextField id='message' label='Message' aria-label='Your Message' className={classes.textfield} />
		</form>
    </React.Fragment>
	);
}

export default Contact;
