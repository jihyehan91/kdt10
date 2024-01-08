import { useForm } from 'react-hook-form';

function Ex1Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };
  return (
    <>
      <h2>실습1</h2>
      <form onSubmit={handleSubmit(onValid)}>
        <label>이름</label>
        <input
          type='text'
          placeholder='name'
          {...register('name', {
            required: '이름을 입력해주세요',
            message: '이름은 필수 항목입니다.',
          })}
        />
        {errors.name?.message}
        <br />
        <label>나이</label>
        <input
          type='text'
          placeholder='age'
          {...register('age', {
            validate: {
              number: (value) => {
                return value > 0 || '0 이상의 숫자만 입력 가능합니다.';
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button>제출</button>
      </form>
    </>
  );
}

export default Ex1Form;
