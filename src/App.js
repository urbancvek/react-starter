import { autobind } from 'core-decorators';
import React, { Component } from 'react';

@autobind
class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

export default App;
