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
          Please bear with, this webpage was created <Moment fromNow>{'2020-07-23T12:00'}</Moment>. More content is coming soon.<br/>
          Feel free to check out the <Link to='/work' className={classes.link}>Work page to see my work history.</Link> Thanks!</Typography>
      </Grid>
    </Grid>
  );
}

export default Construction;
