import React from 'react';
// 실습1
function Food(props) {
  return (
    <p>
      내가 좋아하는 음식은 <span style={{ color: 'red' }}>{props.name}</span>
      입니다.
    </p>
  );
}

Food.defaultProps = {
  name: '치킨',
};

export default Food;
