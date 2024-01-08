const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#button-group');

// 폼의 등록 버튼 클릭 시
// - 테이블에 데이터 추가

function createVisitor() {
  const form = document.forms['visitor-form'];

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert('이름 또는 방명록 기입해주세요!');
    return;
  }

  // name 10글자 유효성 검사
  if (form.name.value.length > 10) {
    alert('이름은 10글자 미만입니다!');
    return;
  }

  axios({
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data);
    const data = res.data;

    const html = `
    <tr id="tr_${data.id}">
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.comment}</td>
      <td><button type="button" onclick="editVisitor(${data.id})">수정</button></td>
      <td><button type="button" onclick="deleteVisitor(this, ${data.id})">삭제</button></td>
    </tr>
    `;

    // insertAdjacentHTML: 특정 요소에 html 추가
    // beforeend: 선택한 요소의 자식으로 html을 현재 자식들의 맨 끝에 추가 (+ beforebegin, afterbegin, afterend 등이 있음) <- html 요소를 추가하는 위치를 지정
    tbody.insertAdjacentHTML('beforeend', html);
    // 입력창 초기화
    form.reset();
  });
}

// 폼의 수정 버튼 클릭 시
// - form input에 값 넣기
// - 변경, 취소 버튼 보이기
function editVisitor(id) {
  // (1) form input 값 넣기 - DB에서 값 받아서
  axios({
    method: 'get',
    // 1) req.query - url: `visitor?id=${id}`
    // url: `visitor?id=${id}`,

    // 2) params 이용 -> req.query (서버 -> visitor)
    // url: '/visitor',
    // params: {
    //   id: id,
    // }

    // ver2) (서버) req.params -> /visitor/:id
    url: `/visitor/${id}`,
  }).then((res) => {
    console.log('editVisitor get data >', res.data);
    // { id: 1, name: '홍길동', comment: '내가 왔다.' }
    const { name, comment } = res.data;
    const form = document.forms['visitor-form'];

    form.name.value = name;
    form.comment.value = comment;
  });

  // (2) 변경, 취소 버튼 보이기
  const html = `
      <button type='button' onclick='editDo(${id})'>변경</button>
      <button type='button' onclick='editCancle()'>취소</button>
  `;
  btnGroup.innerHTML = html;
}

// 수정 -> 변경 버튼 나오니까
// 변경 버튼 클릭 시
// - 데이터 변경

function editDo(id) {
  const form = document.forms['visitor-form'];

  axios({
    method: 'PATCH',
    url: '/visitor',
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data);

    // 수정 후 새로고침 없이 바로 반영되도록
    const children = document.querySelector(`#tr_${id}`).children;
    console.log(children);
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;

    // 입력창 초기화, 등록 버튼 보이기
    editCancle();
  });
}

// 취소 버튼 클릭 시 editCancle
// - input 초기화
// - 등록 버튼 보이기
function editCancle() {
  // input 초기화
  const form = document.forms['visitor-form'];
  form.reset();

  // or form.name.value = '';

  // 등록 버튼 보이기
  const html = `<button type='button' onclick='createVisitor()'>등록</button>`;
  btnGroup.innerHTML = html;
}

// 삭제 버튼 클릭 시
// - DB에 삭제
// - 테이블에서 해당 행 삭제
function deleteVisitor(obj, id) {
  console.log('obj >', obj); // button 태그
  console.log('id >', id);

  // console.log(confirm('정말 삭제하시겠습니까?'));
  if (!confirm('정말 삭제하시겠습니까?')) return;

  axios({
    method: 'DELETE',
    url: '/visitor',
    data: {
      id: id,
    },
  }).then((res) => {
    console.log('res.data', res.data);

    // 1) patentElement 두 번 해서 직접 접근
    // obj.patentElement.patentElement.remove();

    // 2) closest() 메서드
    // 주어진 선택자에 일치하는 가장 가까운 조상 요소를 찾아줌
    // -> 특정 버튼(obj)이 속한 가장 가까운 tr을 찾아 해당 행을 삭제하는 기능
    obj.closest(`#tr_${id}`).remove();
  });
}
