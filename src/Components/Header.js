import React from 'react';
//============[ Theme / CSS ]============
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//============[ React Components ]============
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Hyperlink from '../Components/Header/Hyperlink';

//============[ Icons ]============
import logo from '../images/logo.png';


const styling = makeStyles((theme) => ({
  menuItem: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Roboto Condensed',
    padding: '8px 32px',


  },
  link: {
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    color: '#707070',
    '&:hover': {
      color: '#4c4c4c',

    },
    '&:focus': {
      border: 'none',
      outline: 'none',
    },
    '&:selected': {
      border: 'none',
      outline: 'none',
    },
    textTransform: 'uppercase',
    textDecoration: 'none',
    flexGrow: .25,

    padding: '16px 0px'
  },
  verticalAlign: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    //boxShadow: 'none',
  },
  menuButton: {
    fill: '#909090'
  }
}))
const custom_theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2C5E55'

    },
    secondary: {
      main: '#000000',
    },
  },
});

const newClasses = makeStyles((theme) => ({
  fullWidthHeader: {
    gridArea: 'header',
    backgroundColor: '#2C5E55',
    height:64,
    flexGrow: 1,
    boxSizing: 'border-box',
  },
  restrictedHeader: {
    maxWidth: '1080px',
    border: '1px dashed red',
    flexGrow:1,
    display: 'flex',


  },
  menuButton: {
    fill: '#f0f0f0'
  },
  verticalAlign: {
    display: 'flex',
    flexGrow: 1,
  },
  link: {
    fontFamily: 'Roboto Condensed',
    fontSize: 18,
    color: '#ffffff',



    boxSizing: 'border-box',
    '&:hover': {
      color: '#e5e5e5',
      // fontSize: 20,
    },
    '&:focus': {
      border: 'none',
      outline: 'none',
    },
    '&:selected': {
      border: 'none',
      outline: 'none',
    },
    textTransform: 'uppercase',
    textDecoration: 'none',


    padding: '16px 32px'
  },
}))
function Header (props) {
  //const classes = styling()
  const classes = newClasses()
  const theme = useTheme()

  const usingPhone = useMediaQuery(theme.breakpoints.down('xs'));
  const usingTablet = useMediaQuery(theme.breakpoints.only('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.restrictedHeader}>
      <IconButton edge="end" onClick={handleClick} size="medium" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" >
          <MenuIcon fontSize="large" className={classes.menuButton} />
      </IconButton>
      <Button component={Link} to="/" variant="outline" color="primary" style={{marginLeft:16}}>
        <img src={logo} height={32} />
      </Button>


      {(usingPhone != true) ? (
        <div className={classes.verticalAlign}>
          <Hyperlink to='/work' label='Work'/>
          <Hyperlink to='/demo' label='Demo'/>
          <Hyperlink to='/testimonials' label='Testimonials'/>
          <Hyperlink to='/contact' label='Contact'/>
        </div>
      ) : (<></>)
      }
    </div>

  )
}

export default Header;





/*<ThemeProvider theme={custom_theme}>
  <AppBar position="static" className={classes.appBar}>*

    <Toolbar>
      <IconButton edge="start" onClick={handleClick} size="medium" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" >
          <MenuIcon fontSize="large" className={classes.menuButton} />
      </IconButton>
      <Button component={Link} to="/" variant="outline" color="primary">
        <img src={logo} height={32} />
      </Button>

      {(usingPhone != true) ? (
        <div className={classes.verticalAlign}>
          <Button className={classes.link} component={Link} to="/work" variant="outline" color="primary">Work</Button>
          <Button className={classes.link} component={Link} to="/demo" variant="outline" color="primary">Demos</Button>
          <Button className={classes.link} component={Link} to="/testimonials" variant="outline" color="primary">Testimonials</Button>
          <Button className={classes.link} component={Link} to="/contact" variant="outline" color="primary">Contact</Button>
        </div>
      ) : (<React.Fragment></React.Fragment>)
    }

    </Toolbar>
    <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
    >
      <MenuItem component={Link} to="/" className={classes.menuItem} onClick={handleClose}>
        Home
      </MenuItem>
      <MenuItem component={Link} to="/work" className={classes.menuItem} onClick={handleClose}>
        Work
      </MenuItem>
      <MenuItem component={Link} to="/demo" className={classes.menuItem} onClick={handleClose}>Demos</MenuItem>
      <MenuItem component={Link} to="/testimonials" className={classes.menuItem} onClick={handleClose}>Testimonials</MenuItem>
      <MenuItem component={Link} to="/contact" className={classes.menuItem} onClick={handleClose}>Contact</MenuItem>

    </Menu>

  </AppBar>
</ThemeProvider>*/
