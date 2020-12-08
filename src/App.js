import { React, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Roboto Condensed"',
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
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path='/aos' component={Layout2} />
            <Route path='/' component={Layout1} />
          </Switch>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
