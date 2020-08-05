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

		<form className={classes.root}>
      <TextField id='email' label='Email' aria-label='Your Email' className={classes.textfield} />
      <TextField id='name' label='Name' aria-label='Your Name' className={classes.textfield} />
      <TextField id='message' label='Message' aria-label='Your Message' className={classes.textfield} />
		</form>
    
	);
}

export default Contact;
