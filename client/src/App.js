import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Parent from '../src/components/Parent/Parent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Parent />
        </div>
      </Router>
    );
  }
}

export default App;
