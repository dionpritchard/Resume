import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styling = makeStyles({
  card: {
    backgroundColor: 'white',

    padding: 16,
    justifyContent: 'space-evenly',
  },

  gridItem: {
    marginBottom: 16,
  },
  link: {
    textDecoration: 'none',
    color: '#777',
    '&:visited': {
      color: '#666',
    },
  }
});


function Construction(props) {
  const classes = styling()

	return (
    <Grid container className={classes.card}>
      <Grid item xs={12} sm={8} md={8} className={classes.gridItem} >
        <Typography variant='h4'>Under Development</Typography>
        <Typography variant='body1'>
          Please bear with, this web app was created a short time ago.<br/>
          Feel free to check out the <Link to='/work'>Work history</Link> page to see my experience. Thanks!</Typography>
      </Grid>
    </Grid>
  );
}

export default Construction;
