import React from 'react';
//============[ Theme / CSS ]============
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

//============[ React Components ]============
import Moment from 'react-moment';
import Typography from '@material-ui/core/Typography';

//============[ Icons ]============


const styling = makeStyles((theme) => ({
  footer: {
    color: '#444',
    height: '80px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid #ccc',
  },
  footerText: {
    color: '#333',
    fontFamily: 'Roboto Condensed',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '.5px',
    textAlign: 'center',

  },
}))
function Footer (props) {
  const classes = styling()

  return (
    <div className={classes.footer}>
      <Typography variant='body1' className={classes.footerText}>
        More content coming soon!<br/>
        Website created <Moment fromNow>{'2020-07-23T12:00'}</Moment> |
        Last updated <Moment fromNow>{'2020-07-25T15:52'}</Moment>
      </Typography>
    </div>
  )
}


export default Footer;
