function Result({ data }) {
  const { fruit, background, color, content } = data;
  return (
    <>
      {/* public 경로 안의 이미 */}
      <img src={`${fruit}.jpg`} width={100} height={100} alt={fruit} />
      {/* text */}
      <div
        style={{
          margin: '10px auto',
          backgroundColor: background,
          color: color,
          width: '150px',
          height: '60px',
          lineHeight: '60px',
        }}
      >
        {content}
      </div>
    </>
  );
}

export default Result;
