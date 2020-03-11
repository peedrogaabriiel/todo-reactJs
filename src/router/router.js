import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DragonList from "../modules/dragon-list";
import Login from "../modules/login";
import DragonDetail from "../modules/dragon-details";
import routesNames from "./routes-names";
import CreateDragon from "../modules/create-dragon";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routesNames.dragon} component={DragonList} />
      <Route exact path={routesNames.login} component={Login} />
      <Route exact path={routesNames.dragonId} component={DragonDetail} />
      <Route exact path={routesNames.createDragon} component={CreateDragon} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
