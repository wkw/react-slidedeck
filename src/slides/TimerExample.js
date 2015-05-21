import React, { Component } from 'react';

function increment(state) {
  return { counter: state.counter + 1 };
}

export default class TimerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(increment),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.counter}</div>;
  }
}
