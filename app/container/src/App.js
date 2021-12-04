import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
  useHistory,
} from "react-router-dom";
import loadable from "@loadable/component";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Header from "./components/Header";

const MarketingApp = loadable(() => import("./components/MarketingApp"));
const AuthApp = loadable(() => import("./components/AuthApp"));
const DashBoardApp = loadable(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Switch>
          <Route path="/auth">
            <AuthApp onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path="/dashboard">
            {!isSignedIn && <Redirect to="/" />}
            <DashBoardApp />
          </Route>
          <Route path="/" component={MarketingApp} />
        </Switch>
      </div>
    </StylesProvider>
  );
};

export default App;
