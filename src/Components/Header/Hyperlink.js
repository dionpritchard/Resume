import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


const styles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '16px 24px',
    fontSize: '18px',
    color: '#fff',
    alignSelf: 'center',

  },
  linkLabel:  {
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
    fontFamily: 'Roboto Condensed',
  },
  emptyUnderline: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'center',
    textAlign: 'center',
    flexGrow: 1,
    height: '2px',
    transition: 'width linear .2s',
  }

}))




function Hyperlink(props) {
  const classes = styles()
  const [underlined, setUnderlined] = useState(false)


  return (

    <Link to={props.to} className={classes.link} onMouseOver={() => setUnderlined(true)} onMouseLeave={()=> setUnderlined(false)}>
       <div className={classes.linkLabel}>
         <span>{props.label}</span>
         <div className={classes.emptyUnderline} style={(underlined === true) ? {width: '100%'} : {width: '0%'}}></div>
       </div>
     </Link>
  )
}

export default Hyperlink
