import React from "react";
import ReactDom from "react-dom";

// Mount function to start up the app
const mount = (el) => {
  ReactDom.render(<h1>Hi there!</h1>, el);
};

// Running in isolation
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#dev-marketing-root");
  if (root) {
    mount(root);
  }
}

// Running through container
export { mount as mountMarketing };
