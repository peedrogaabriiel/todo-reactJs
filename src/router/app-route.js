import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";

const AppRoute = props => {
  return props.private && !isAuthenticated() ? (
    <Redirect to="/login" />
  ) : (
    <Route {...props} />
  );
};

export default AppRoute;
