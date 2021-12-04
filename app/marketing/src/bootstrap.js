import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// Running in isolation
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#dev-marketing-root");
  if (root) {
    mount(root, {});
  }
}

// Running through container
export { mount };
