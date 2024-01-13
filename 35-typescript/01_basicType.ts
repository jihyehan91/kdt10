// 명시적으로 타입 지정
let a: number = 1;
a = 5;
// a = '안녕하세요'; // type error
console.log(a);

let b: string = 'str';
let c: boolean = false;
let d: null = null;
let e: undefined;

// 타입 추론 (암묵적으로 타입 지정됨)
let aa = 5;
let bb = 'hello';
let cc = false;
let dd = null;
let ee;

// 배열
// 배열 타입을 지정하는 방법
// 1. type[]
let numArr: number[] = [1, 2, 3, 4, 5];
// numArr = ['1', '2', '3'] // type error

// 2. Array<type>
let strArr: Array<string> = ['coffee', 'latte', 'mocha'];

// 배열의 원소가 여러 타입일 경우
let arr1: (number | string | number[])[] = [1, 'hi', [11, 22, 33]];

// 어떤 자료형이든 상관없는 배열
let arr2: any[] = [1, 'bye', null, [1, 2, 3], ['1', '2'], true];

// 객체
let obj: object = {
  name: 'layla',
  gender: 'female',
};
