import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Header from "./components/Header";

const MarketingApp = loadable(() => import("./components/MarketingApp"));
const AuthApp = loadable(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
