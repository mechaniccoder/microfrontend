import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassname = createGenerateClassName({
  productionPrefix: "ma",
});

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <Router history={history}>
          <Switch>
            <Route path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
