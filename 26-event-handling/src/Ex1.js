import React, { Component } from 'react';

class Ex1 extends Component {
  state = { message: 'Hellow World!' };

  onClick = () => {
    this.setState({
      message: 'Goodbye World!',
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.onClick}>Ex1</button>
      </div>
    );
  }
}

export default Ex1;
