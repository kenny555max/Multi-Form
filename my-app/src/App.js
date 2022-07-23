import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  state = {
    step: 0
  }

  render() { 
    return (
      <Form />
    );
  }
}
 
export default App;