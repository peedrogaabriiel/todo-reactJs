import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import dragonList from "./modules/dragon-list";
import Login from "./modules/login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={dragonList} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
