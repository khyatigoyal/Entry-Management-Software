import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HostCreate from './streams/HostCreate';
import VisitorCreate from './streams/VisitorCreate';
import VisitorDelete from './streams/VisitorDelete';
import HostsList from './streams/HostsList';
import HostDetails from './streams/HostDetails';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={HostsList} />
            <Route path='/hosts/new' component={HostCreate} />
            <Route
              path='/hosts/:id/newvisitor'
              exact
              component={VisitorCreate}
            />
            <Route path='/hosts/:id/checkout' component={VisitorDelete} />
            <Route path='/hosts/:id' component={HostDetails} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
