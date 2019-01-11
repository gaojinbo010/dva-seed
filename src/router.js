import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history,app }) {

  const UserPage=dynamic({
    app,
    models:()=>[
      import('./models/user')
    ],
    component:()=>import('./routes/usersPage')
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/users" exact component={UserPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
