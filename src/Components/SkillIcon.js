import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Typography from '@material-ui/core/Typography';

const iconStyling = makeStyles(theme => ({
  skillsContainer: {
    display:'flex',
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  iconText: {
    fontSize:16,
    fontFamily:'Bauhaus',
    textTransform:'uppercase',
  },
  iconContainer: {
    flexBasis:'25%',
    [theme.breakpoints.only('xs')]: {
      flexBasis: '33%'
    },
    [theme.breakpoints.only('sm')]: {
      flexBasis: '25%'
    },
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    margin: 0,
  },

  icon: {
    height: 24,
    margin: '0px auto 8px auto',
  }
}))



function SkillIcon(props) {
  const iconClasses = iconStyling()

	return (
    <figure className={iconClasses.iconContainer}>
      <figcaption className={iconClasses.iconText} style={{color:props.color}}>{props.text}</figcaption>
      <img src={props.img} className={iconClasses.icon} alt={props.text} />
    </figure>
  );
}

export default SkillIcon;
