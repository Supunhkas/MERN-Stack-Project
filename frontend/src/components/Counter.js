import React from "react";

class CounterClass extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.state = {
      number: 0,
    };
  }

  increment() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.number}</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;
