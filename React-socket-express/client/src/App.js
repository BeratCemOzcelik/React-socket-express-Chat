import React from "react";

import Chat from "./Companents/Chat/Chat";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Chat} />
    </Router>
  );
};

export default App;
