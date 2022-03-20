// forEach, map, filter, reduce
// 공통점 : 고차함수

// 호출 시 두개의 인자를 받는다.
// predicate => 콜백 함수 호출
// function forEach(predicate, thisArg) {}
// 원본 배열을 하나하나 탐색하면서 요소들을 이용해서 새로운 배열을 생성 후 return 받아서 변수에 넣어준다.

// function map(predicate, thisArg) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     // 호출문
//     list.push(predicate(a[i], i));
//   }
//   return list;
// }
a = [10, 11, 12, 13, 14, 15];
let result = a.map(
  function (v, i) {
    return v * v;
  },
  [1, 2]
);
console.log(result);

// map의 새로운 배열은 항상 원본 배열의 길이와 동일하다.
a = [10, 11, 12, 13, 14, 15];
let answer = a.map(
  function (v, i) {
    if (v % 2 === 0) return v * v;
  },
  [1, 2]
);
console.log(answer);
