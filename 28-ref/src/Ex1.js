import { useState, useRef } from 'react';

const Ex1 = () => {
  const writerRef = useRef();
  const titleRef = useRef();

  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [comment, setComment] = useState([
    {
      writer: '민수',
      title: '안뇽',
    },
    {
      writer: '지민',
      title: '하이하이',
    },
    {
      writer: '희수',
      title: '멋쟁이',
    },
  ]);
  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState('writer');

  const addComment = () => {
    if (writerRef.current.value === '') return writerRef.current.focus();
    if (titleRef.current.value === '') return titleRef.current.focus();
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    setComment([...comment, newComment]);
    setInputWriter('');
    setInputTitle('');
  };

  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }
      return item;
    });

    setResult(searchResult);
    setInputSearch('');
  };

  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor='wirter2'>작성자:</label>
        <input
          id='wirter2'
          type='text'
          name='writer'
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
          ref={writerRef}
        />
        <label htmlFor='title2'>제목:</label>
        <input
          id='title2'
          type='text'
          name='title'
          value={titleRef}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type='button' onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select name='type' onChange={selectSearchType}>
          <option value='writer'>작성자</option>
          <option value='title'>제목</option>
        </select>

        <input
          type='text'
          name='search'
          placeholder='검색어'
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type='button' onClick={searchComment}>
          검색
        </button>
      </form>

      <h3>전체 댓글 목록</h3>
      <table border={1} style={{ marginTop: '30px', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <div>
          <table border={1} style={{ marginTop: '30px', width: '500px' }}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((value, idx) => {
                return (
                  <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.writer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  );
};

export default Ex1;
