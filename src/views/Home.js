import React from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid, Slider, Typography, useMediaQuery } from '@material-ui/core'

import Moment from 'react-moment';
import { Link } from 'react-router-dom'


import Construction from '../Components/Construction';
import QtDemo from '../Components/QtDemo'
import SniffEmAll from '../Components/SniffEmAll'


const homePageStyling = makeStyles({
  root: {
    margin: '0px auto',
    color: '#444',
    textAlign: 'center',

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


      {/*<SniffEmAll  renderPS='60' updatePS='60' debug={{border: '1px solid black', quadtreeLines: true}} qtDebug={{renderQuadrants: true}} />*/}
      {/*<p>Quadtrees redusssce collisions from n*n to </p>

      <QtDemo renderPS='60' updatePS='60' debug={{border: '1px solid black', quadtreeLines: true}} qtDebug={{renderQuadrants: true}} />
      */}
      {/*<GraphicsElement renderPS='60' updatePS='60' debug={{border: '1px solid black', quadtreeLines: true}} qtDebug={{renderQuadrants: true}} />*/}
		</section>
	);
}




export default Home;
