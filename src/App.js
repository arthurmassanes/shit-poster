import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/Home';
import PostPage from './pages/PostPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/post">
          <PostPage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
