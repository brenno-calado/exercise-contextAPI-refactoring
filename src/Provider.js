import React, { Component } from 'react';
import Context from './Context';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    return this.setState({ cars: { ...this.state.cars, [car]: side } });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    const { children } = this.props;

    return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )}
}

export default Provider;
