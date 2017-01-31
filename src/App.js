// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';

@autobind
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
