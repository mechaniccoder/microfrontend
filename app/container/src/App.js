import React, { useState } from "react";
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
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            signedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
