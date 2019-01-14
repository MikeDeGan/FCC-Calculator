import React, { Component } from 'react';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      currentCalc: '3+4'
    };
    this.doCalc = this.doCalc.bind(this);
  }

  doCalc() {
    const answer = parseFloat(this.state.currentCalc); //Math.round returns NAN
    console.log(`${this.state.currentCalc} equals ${answer}`);
    this.setState({ display: answer });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>FCC Calculator Project</h1>
        </header>
        <main>
          <div id="display">{this.state.display}</div>
          <button id="equals" onClick={this.doCalc}>
            =
          </button>
        </main>
      </div>
    );
  }
}

export default App;
