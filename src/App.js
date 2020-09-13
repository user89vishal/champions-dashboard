import React, { Suspense, lazy } from "react";
import "./App.css";

import Champions from "./components/champions";
import NavBar from "./components/navBar";

const Home = lazy(() => import("./home"));

function App() {
  return (
    <div>
      {/* <Suspense fallback={<div>Please wait...</div>}>
        <h1>Lazy loading</h1>
        <Home />
      </Suspense> */}

      {/* <div className="ml-3 mr-3"> */}
      <Champions />
      {/* </div> */}
    </div>
  );
}

export default App;
