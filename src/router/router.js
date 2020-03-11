import React from "react";

import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import DragonList from "../modules/dragon-list";
import Login from "../modules/login";
import DragonDetail from "../modules/dragon-details";
import routesNames from "./routes-names";
import CreateDragon from "../modules/create-dragon";
import AppRoute from "./app-route";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <AppRoute exact path={routesNames.login} component={Login} />
      <AppRoute exact component={DragonList} path={routesNames.dragon} />
      <AppRoute
        exact
        private
        component={DragonDetail}
        path={routesNames.dragonId}
      />
      <AppRoute
        exact
        private
        component={CreateDragon}
        path={routesNames.createDragon}
      />
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
