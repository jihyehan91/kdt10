function print(a: number, b: number, c?: number): void {
  console.log('a=', a);
  console.log('b=', b);
  console.log('c=', c);
}

print(2, 4, 6); // a = 2, b = 4, c = 6
print(5, 7); // a = 5, b = 7, c = undefined

// 매개변수에 기본값 할당 가능
function print2(a: number, b: number, c: number = 50): void {
  console.log('a=', a);
  console.log('b=', b);
  console.log('c=', c);
}

print2(2, 4, 6);
print2(5, 7);

// 매개변수 없는 함수
function printHello(): void {
  console.log('hello');
}

printHello();

// void가 아닌 자료형을 반환하는 함수
function sayHello(): string {
  return 'hello!';
}

console.log(sayHello());

function returnNum(): number {
  return 100 + 100;
}
console.log(returnNum());

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(500, 250));

// 화살표 함수
const sum2 = (a: number, b: number): number => {
  return a + b;
};

// 화살표 함수 + return 생략
const sum3 = (a: number, b: number): number => a + b;

// interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const dowha: Greet = {
  name: 'dowha',
  hi() {
    return '여기는' + this.name + '캠퍼스';
  },
  bye(a: number) {
    return `잘 가라는 인사를  ${a}번 했습니다.`;
  },
};

console.log(dowha.hi()); // 여기는 dowha 캠퍼스
console.log(dowha.bye(5)); // 잘 가라는 인사를 5번 했습니다.

// never: 함수가 절대 끝나지 않는 경우
function goingOn(): never {
  while (true) {
    console.log('gogo!');
  }
} // 무한 루프에 빠져 함수가 끝나지 않음
