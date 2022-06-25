// 1일차
// 제너릭스:  함수, 클래스 인터페이스, 여러종류의 타입에 대해 호환을 맞춰야 할때 사용하는,

// ? 아래 a와 b 처럼 any 대신 object를 넣을 수 있지만, 그렇게 하면, merged 안에 어떤 타입들이 있는지 정확이 알방법이 없는거야
// ? 타입 유추에 도움이 된다. 타입을 지켜내ㅑ고 싶을 댸
// ? 이런 상황에서 generics를 사용하게 된다.
// function merge(a: any, b: any) {
//   return {
//     ...a,
//     ...b,
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 2 });

// ? 활용 사례 1
// 왕 진짜 대단하다 generics 짱 멋지다 타입  스크립트
// function merge<A1, A2>(a: A1, b: A2) {
//   return {
//     ...a,
//     ...b,
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 2 });

// ? 활용 사례 2
// ? param 의 타입이 뭐가 올지 모를 떄 any를 쓰는게 아니라 제네릭 T를 쓰는거야
// ? any를 가져온 것과 같은 형태인데, 사용되는 param의 정확한 타입을 사용할 때 더 자세하게 알 수 잇게 해준다.
// function wrap<T>(param: T) {
//   return {
//     param,
//   };
// }

// const wrapped = wrap(10);

// wrapped.

// ? 사례 1
// ? interface랑 type alias 에서도 사용할 수 있어!
// interface Item<T> {
//   list: T[];
// }
// const item: Item<number> = {
//   list: [1, 2, 3],
// };
// item.list;

// ? 사례 2
// ? type alias 에서 사용하는 예시
// type Item<T, V> = {
//   list: T[];
//   value: V;
// };

// const item: Item<string, number> = {
//   list: ["a", "b", "c"],
//   value: 123,
// };

// ? 사례 3
// ? class 에서 제네릭스를 사용하는 예시
// queue를 만들어볼거고 데이터를 등록할 수 있는 자료형이며, 먼저 등록한 항목을 먼저 뽑아올 수 있는 성질을 가지고 있다.
// 줄서는거랑 비슷하다.

class Queue<T> {
  list: T[] = [];

  // getter method를 만들어준다고 함! 이거 진짜 오랫만이지 않슴!?
  get length() {
    return this.list.length;
  }

  // queue에다가 새로운 것을 등록하겠다는 뜻!
  enqueue(item: T) {
    this.list.push(item);
  }

  // queue에서 가장 첫번째 항목을 리턴한다
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) {
  console.log(queue.dequeue());
}
