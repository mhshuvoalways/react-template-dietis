import React from "react";
import Helmet from "./Helmet";
import Router from "./Router";

const App: React.FC = () => {
  return (
    <div>
      <Helmet />
      <Router />
    </div>
  );
};

export default App;
