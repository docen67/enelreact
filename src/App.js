import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Login from "./views/login.js";
import Homepage from "./views/homepage.js";
import Welcomepage from "./views/welcome.js";
import Register from "./views/register.js";
import Success from "./views/success.js";


 const App = () => (
  <Router>
    <Switch>
      <Router basename="/" />
      <Route exact path="/" component={Welcomepage} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/success" component={Success} />
    </Switch>
  </Router>
);

export default App
