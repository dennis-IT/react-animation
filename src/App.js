import { React, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/aos' render={props => <Layout2 {...props} />} />
        <Route path='/' render={props => <Layout1 {...props} />} />
      </Switch>
    );
  }
}

export default App;
