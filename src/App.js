import { React, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/aos' component={Layout2} />
          <Route path='/' component={Layout1} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
