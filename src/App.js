import { autobind } from 'core-decorators';
import React, { Component } from 'react';
import { BrowserRouter, Match, Link } from 'react-router';

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

          <Match exactly pattern="/" component={HomePage} />
          <Match pattern="/about" component={AboutPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
