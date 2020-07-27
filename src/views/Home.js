import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Construction from '../Components/Construction';
const homePageStyling = makeStyles({
  root: {
    margin: '0px auto',
    color: '#444',

  },
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

function Home () {
	const classes = homePageStyling()
	return (
		<section className={classes.root}>
      <Construction />
		</section>
	);
}

export default Home;
