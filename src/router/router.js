import React from "react";
import history from "./history";
import AppRoute from "./app-route";
import Login from "../modules/login";
import routesNames from "./routes-names";
import DragonList from "../modules/dragon-list";
import DragonEdit from "../modules/dragon-edit";
import CreateDragon from "../modules/create-dragon";
import DragonDetail from "../modules/dragon-details";
import { Redirect, Router as ReactRouter, Switch } from "react-router";

const Routes = () => (
  <ReactRouter history={history}>
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
      <AppRoute
        exact
        private
        component={DragonEdit}
        path={routesNames.editDragon}
      />
      <Redirect to="/login" />
    </Switch>
  </ReactRouter>
);

export default Routes;
