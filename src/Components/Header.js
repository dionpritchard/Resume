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

//============[ Icons ]============
import logo from '../images/logo.png';


const styling = makeStyles((theme) => ({
  menuItem: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Roboto Condensed',
    padding: '8px 32px',
    '&:hover': {
      backgroundColor: 'red'
    }

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
    flexGrow: 1,
    padding: '16px 0px'
  },
  verticalAlign: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
  },
  menuButton: {
    fill: '#909090'
  }
}))
const custom_theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'

    },
    secondary: {
      main: '#707070',
    },
  },
});

function Header (props) {
  const classes = styling()
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
    <ThemeProvider theme={custom_theme}>
      <AppBar position="static" className={classes.appBar}>
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
              <Button className={classes.link} component={Link} to="/education" variant="outline" color="primary">Education</Button>
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
          <MenuItem component={Link} to="/education" className={classes.menuItem} onClick={handleClose}>
            Education
          </MenuItem>
          <MenuItem component={Link} to="/testimonials" className={classes.menuItem} onClick={handleClose}>
            Testimonials
          </MenuItem>
          <MenuItem component={Link} to="/contact" className={classes.menuItem} onClick={handleClose}>
            Contact
          </MenuItem>

        </Menu>

      </AppBar>
    </ThemeProvider>



  )
}

export default Header;
