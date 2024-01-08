import React, { Component } from 'react';
import propTypes from 'prop-types';

class ClassCom_prac extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <p>이건 기본 {text}입니다.</p>
        <button onClick={valid}>버튼</button>
      </div>
    );
  }
}

ClassCom_prac.defaultProps = {
  text: '이건 기본 text props입니다.',
};

export default ClassCom_prac;
