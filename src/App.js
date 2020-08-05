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

//============[ Components ]============
import Header from './Components/Header';
import Construction from './Components/Construction';
import Footer from './Components/Footer';

//============[ Fonts ]============
import './Fonts/bauhaus-93.ttf';

//============[ CSS ]============
import './App.css';


const appStyling = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      maxWidth: '1080px',
      margin: '0px auto',
    },
  },
}))
const custom_theme = createMuiTheme({
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


function App() {
  const classes = appStyling()
  return (
    <ThemeProvider theme={custom_theme}>
      <div className="App" className={classes.root}>

        <Router history={ history }>
          <Header />

          <div style={{flexGrow:1}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              <Route path="/demo" component={Demo} />
              <Route component={Construction} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
