import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  )
}

export default Routes;