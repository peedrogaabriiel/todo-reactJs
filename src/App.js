import React, { useEffect } from "react";
import "./App.css";
import store from "./ducks";
import Router from "./router";
import HttpService from "./services";
import { Provider } from "react-redux";

const App = () => {
  useEffect(() => {
    HttpService.initialize();
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
