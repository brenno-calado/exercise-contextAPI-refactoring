import React, { Component } from 'react';
import Context from './Context';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        blue: false,
        red: false,
        yellow: false,
      },
      signal: { color: 'red'},
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    return this.setState({ cars: { ...this.state.cars, [car]: side } });
  }

  changeSignal(signal) {
    return this.setState({ signal: { color: signal } });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
    const { children } = this.props;
    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
  }
}

export default Provider;
