// (임시) DB로부터 받아온 데이터 댓글 목록 (가정)
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요',
    },
    {
      id: 2,
      userid: 'hell',
      date: '2022-10-31',
      comment: '안녕하세요',
    },
    {
      id: 3,
      userid: 'apple',
      date: '2023-10-31',
      comment: '오 신기하다',
    },
    {
      id: 4,
      userid: 'best',
      date: '2023-4-31',
      comment: '댓글 적기',
    },
  ];
};
