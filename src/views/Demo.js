import React from 'react';

//============[ Theme / CSS ]============
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//============[ React Components ]============
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import SkillIcon from '../Components/SkillIcon.js';


const styling = makeStyles({

});


function Demo () {
	const classes = styling()

  const theme = useTheme()
  const usingPhone = useMediaQuery(theme.breakpoints.down('xs'));
  const usingTablet = useMediaQuery(theme.breakpoints.only('sm'));

  return (
    <div className={classes.root}>
      <Grid container className={classes.card}>
        <Grid item xs={12} sm={8} md={7} className={classes.gridItem} >
            <Typography variant='h1'>Article Header</Typography>
            <Typography variant='h3'>Article Subtitle</Typography>


        </Grid>
      </Grid>
    </div>
  )
}

export default Demo;
