import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

// import Landing from "./components/Landing";
// import Pricing from "./components/Pricing";

const generateClassname = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <Router history={history}>
          <Switch></Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
