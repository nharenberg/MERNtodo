import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import App from "./components/App"
import List from "./components/List"

render (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="list" component={List}></Route>
    </Route>
  </Router>,
  document.getElementById("root")
);
