import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Champions from "./components/champions";
import CartList from "./components/cartItems";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/cartItems" component={CartList} />
        <Route path="/" component={Champions} />
      </Switch>
    </div>
  );
}

export default App;
