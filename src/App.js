import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from "./routes/Home";
import Search from "./routes/Search";
import Detail from './routes/Detail';

function App () {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/search" exact={true} component={Search}></Route>
      <Route path="/detail" exact={true} component={Detail}></Route>
    </HashRouter>
  );
};

export default App;
