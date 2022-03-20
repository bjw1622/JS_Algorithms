// forEach, map, filter, reduce
// 공통점 : 고차함수

// 호출 시 두개의 인자를 받는다.
// predicate => 콜백 함수 호출
// function forEach(predicate, thisArg) {}
// for 반복문 대신에 사용한다.

// function forEach(predicate, thisArg) {
//   for (let i = 0; i < a.length; i++) {
//     // 호출문
//     predicate(a[i], i);
//   }
// }

a = [10, 11, 12, 13, 14, 15];
a.forEach(
  function (a, b) {
    console.log(a, b, this);
  },
  [1, 2, 3, 4]
);
