import React, { useEffect } from "react";
import "./App.css";

import Champions from "./components/champions";
import NavBar from "./components/navBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Champions />
      </div>
    </div>
  );
}

export default App;
