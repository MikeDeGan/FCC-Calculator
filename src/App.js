import React, { Component } from 'react';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      myNumbers: {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
      }
    };
    this.hitClear = this.hitClear.bind(this);
    this.hitNumber = this.hitNumber.bind(this);
    this.hitOperator = this.hitOperator.bind(this);
    this.hitDecimal = this.hitDecimal.bind(this);
    this.hitEquals = this.hitEquals.bind(this);
  }

  hitClear() {
    this.setState({
      display: '0'
    });
  }

  hitNumber(e) {
    let numHit = this.state.myNumbers[e.target.id];
    this.setState({
      display: this.state.display === '0' ? numHit : this.state.display + numHit
    });
  }

  hitOperator(e) {
    switch (e.target.id) {
      case 'add':
        this.setState({
          display: this.state.display + '+'
        });
        break;
      case 'subtract':
        this.setState({
          display: this.state.display + '-'
        });
        break;
      case 'multiply':
        this.setState({
          display: this.state.display + '*'
        });
        break;
      case 'divide':
        this.setState({
          display: this.state.display + '/'
        });
        break;
      default:
        console.log('default');
    }
  }

  hitDecimal() {
    this.setState({
      display: this.state.display + '.'
    });
  }

  hitEquals() {
    const answer = eval(this.state.display); //ESLint does not like eval
    console.log(`${this.state.display} equals ${answer}`);
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
          <div id="keypad">
            <button id="clear" onClick={this.hitClear}>
              C
            </button>
            <button id="add" onClick={this.hitOperator}>
              +
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
            <button id="subtract" onClick={this.hitOperator}>
              -
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
            <button id="multiply" onClick={this.hitOperator}>
              x
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
            <button id="divide" onClick={this.hitOperator}>
              /
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
        </main>
      </div>
    );
  }
}

export default App;
