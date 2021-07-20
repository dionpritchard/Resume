import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

//============[ Theme / CSS ]============
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import history from './util/history.js';


//============[ Views ]============
import Home from './views/Home';
import Work from './views/Work';
import Contact from './views/Contact';
import Demo from './views/Demo';
import Products from './views/Products';

//============[ Components ]============
import Header from './Components/Header';
import Construction from './Components/Construction';
import Footer from './Components/Footer';

//============[ Fonts ]============
import './Fonts/bauhaus-93.ttf';

//============[ CSS ]============
import './App.css';



const custom_theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2C5E55'

    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto Condensed',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: { marginBottom: 16, fontSize: '2rem', fontWeight: 'bold' },
    h2: { marginBottom: 16, fontSize: '1.5rem', fontWeight: 'bold' },
    h3: { marginBottom: 16, fontSize: '1.2rem', fontWeight: 'bold' },
    h4: { marginBottom: 16, fontSize: '1.0rem', fontWeight: 'bold' },
    h5: { marginBottom: 16, fontSize: '0.85rem', fontWeight: 'bold' },
    h6: { marginBottom: 16, fontSize: '0.7rem', fontWeight: 'bold' },
  },
});

const appStyling = makeStyles((theme) => ({

  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      //maxWidth: '1080px',
      margin: '0px auto',
    },
  },
  newRoot: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '64px 1fr 64px',
    minHeight: '100vh',

  },
  headerBar: {
    boxShadow: '0px 0px 7px #888',
    color: 'white',
    backgroundColor: '#4B5195',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBar: {
    boxShadow: '0px 0px 7px #888',
    color: 'white',
    backgroundColor: '#4B5195',
    justifyContent: 'center',
  },
}))

function App() {
  const classes = appStyling()
  return (
    <ThemeProvider theme={custom_theme}>
      <div className="App" className={classes.newRoot}>

        <Router history={ history }>

          <div className={classes.headerBar}>
            <Header />
          </div>

          <div style={{display:'flex',justifyContent:'center',backgroundColor: '#f7f3f3',justifyContent:'center'}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/products" component={Products} />
              <Route component={Construction} />
            </Switch>
          </div>

          <div className={classes.footerBar}>
            Footer
          </div>
        </Router>







      </div>
        {/*<Router history={ history }>
          <Header />

          <div style={{flexGrow:1}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/products" component={Products} />
              {//<Route path="/contact" component={Contact} />}
              {//<Route path="/demo" component={Demo} />}
              <Route component={Construction} />
            </Switch>
          </div>
          <Footer />
        </Router>*/}

    </ThemeProvider>
  );
}

export default App;
