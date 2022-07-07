import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from "./Home";
import Search from "./Search";

function App () {
  return (
    <HashRouter>
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/search" exact={true} component={Search}></Route>
  </HashRouter>
  );
};

export default App;
