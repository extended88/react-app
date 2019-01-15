import React, { Component } from 'react';

class App extends Component {
  render() {

      return (
        <React.Fragment>
          <label htmlfor="bar">bar</label>
          <input type="text"  onChange = {() => {console.log("I am clicled")}} ></input>
        </React.Fragment>
      )
  }
}


export default App;
