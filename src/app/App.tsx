import React from "react";
import Context from "./Context";
import Helmet from "./Helmet";
import Router from "./Router";

const App: React.FC = () => {
  return (
    <Context>
      <Helmet />
      <Router />
    </Context>
  );
};

export default App;
