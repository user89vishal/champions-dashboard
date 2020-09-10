import React from "react";
import "./App.css";

import Champions from "./components/champions";
import NavBar from "./components/navBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="ml-3 mr-3">
        <Champions />
      </div>
    </div>
  );
}

export default App;
