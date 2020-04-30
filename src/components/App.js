import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from 'components/pages/Login'
import Track from 'components/pages/Track'



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Track />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
