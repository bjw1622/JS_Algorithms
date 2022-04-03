// forEach, map, filter, reduce
// 공통점 : 고차함수

// 호출 시 두개의 인자를 받는다.
// predicate => 콜백 함수 호출
// function forEach(predicate, thisArg) {}

// function filter(predicate, thisArg) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     // 호출문
//     // map과 다르게 참일때만 push 해준다.
//     if (predicate(a[i], i)) {
//       list.push(a[i]);
//     }
//   }
//   return list;
// }

// map과 다르게 원하는 원소만 출력해준다.
// 콜백함수가 참일 요소일때만 return을 한다.
a = [10, 11, 12, 13, 14, 15];
let answer = a.filter(function (v, i) {
  if (v % 2 === 0) {
    return v;
  }
});
console.log(answer);
 