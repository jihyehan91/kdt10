import React from 'react';
import book from '../book.jpg';

// 실습2
// import css 필요없음
function Book(props) {
  return (
    <div className='book'>
      <h1>이번 주 베스트셀러</h1>
      <img className='book-cover' src={book} />
      <div className='text-box'>
        <p className='title'>제목: {props.title}</p>
        <p>저자: {props.author}</p>
        <p>판매가: {props.price}</p>
        <p>구분: {props.type}</p>
      </div>
    </div>
  );
}

Book.defaultProps = {
  title: '토지',
  author: '박경리',
  price: '500,000원',
  type: '소설',
};

export default Book;
