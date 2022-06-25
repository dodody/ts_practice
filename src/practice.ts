// interface는 보통 대문자로 지정하나보?
// interface Person {
//   name: string;
//   age?: number;
// }

type Person = {
  name: string;
  age?: number;
};

// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }

// !! 아 아까 private, public constructor에서 쓰는거 실습 못해보고 그냥 지나갔네
// ! 모어떰~~
// Person이라는 interface를 상송 받고자 할 때 extends를 사용할 수 있다
// interface Developer extends Person {
//   skills: string[];
// }

// type alias 에서는 &로 하면 되네
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "dody",
  age: 30,
  // skills: ["js"],
};

const expert: Developer = {
  name: "dody",
  skills: ["js", "ts"],
};

// 인터페이스로 못하는걸 할 수 있는데, 아래와 같다
type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "blue";
const color: Color = "red";
