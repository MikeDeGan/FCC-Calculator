import React, { Component } from 'react';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      myIDs: {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/'
      },
      decimalActive: false,
      operatorActive: false,
      validNum: true
    };
    this.hitClear = this.hitClear.bind(this);
    this.hitNumber = this.hitNumber.bind(this);
    this.hitOperator = this.hitOperator.bind(this);
    this.hitDecimal = this.hitDecimal.bind(this);
    this.hitEquals = this.hitEquals.bind(this);
  }

  hitClear() {
    this.setState({
      display: '0',
      decimalActive: false,
      operatorActive: false,
      validNum: true
    });
  }

  hitNumber(e) {
    // Last calc was not a valid number only allow Clear key
    if (!this.state.validNum) {
      return;
    }
    let numHit = this.state.myIDs[e.target.id];
    this.setState({
      operatorActive: false,
      display: this.state.display === '0' ? numHit : this.state.display + numHit
    });
  }

  hitOperator(e) {
    // Last calc was not a valid number only allow Clear key
    if (!this.state.validNum) {
      return;
    }
    let operatorHit = this.state.myIDs[e.target.id];
    const { display, operatorActive } = this.state;
    // Only allow one operator in a row. if last key was an operator replace it with this new operator
    const newDisplay = operatorActive
      ? display.slice(0, -1) + operatorHit
      : display + operatorHit;

    this.setState({
      decimalActive: false,
      operatorActive: true,
      display: newDisplay
    });
  }

  hitDecimal() {
    // Last calc was not a valid number only allow Clear key
    if (!this.state.validNum) {
      return;
    }
    //If current number already has a decimal just ignore this key hit
    if (this.state.decimalActive) {
      return;
    }
    //Add the decimal to the display and flag as decimalActive
    this.setState({
      decimalActive: true,
      display: this.state.display + '.'
    });
  }

  hitEquals() {
    // Last calc was not a valid number only allow Clear key
    if (!this.state.validNum) {
      return;
    }
    //If the last key hit was an operator - do not calc
    if (this.state.operatorActive === true) {
      return;
    }
    let answer = eval(this.state.display); //ESLint does not like eval
    const validNum = !isNaN(parseFloat(answer)) && isFinite(answer);
    const answerHasDecimal = !Number.isInteger(answer);

    this.setState({
      display: answer.toString(),
      decimalActive: answerHasDecimal,
      validNum: validNum
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>FCC Calculator Project</h1>
        </header>
        <main>
          <div id="display">{this.state.display}</div>
          <div id="kayPadContainer">
            <div id="keypad">
              <button id="clear" onClick={this.hitClear}>
                C
              </button>
              <button id="divide" onClick={this.hitOperator}>
                /
              </button>
              <button id="multiply" onClick={this.hitOperator}>
                x
              </button>
              <button id="subtract" onClick={this.hitOperator}>
                -
              </button>
              <button id="seven" onClick={this.hitNumber}>
                7
              </button>
              <button id="eight" onClick={this.hitNumber}>
                8
              </button>
              <button id="nine" onClick={this.hitNumber}>
                9
              </button>
              <button id="four" onClick={this.hitNumber}>
                4
              </button>
              <button id="five" onClick={this.hitNumber}>
                5
              </button>
              <button id="six" onClick={this.hitNumber}>
                6
              </button>
              <button id="add" onClick={this.hitOperator}>
                +
              </button>
              <button id="one" onClick={this.hitNumber}>
                1
              </button>
              <button id="two" onClick={this.hitNumber}>
                2
              </button>
              <button id="three" onClick={this.hitNumber}>
                3
              </button>
              <button id="zero" onClick={this.hitNumber}>
                0
              </button>
              <button id="decimal" onClick={this.hitDecimal}>
                .
              </button>
              <button id="equals" onClick={this.hitEquals}>
                =
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
