// forEach, map, filter, reduce
// 공통점 : 고차함수

// 호출 시 두개의 인자를 받는다.
// predicate => 콜백 함수 호출
// function forEach(predicate, thisArg) {}
// 값을 생성해서 return
// 대체적으로 sum 구할 때 많이 사용한다.

// function reduce(predicate, val) {
//   let result = val;
//   for (let i = 0; i < a.length; i++) {
//     // 호출문
//     result = predicate(result, a[i]);
//   }
//   return result;
// }

a = [10, 11, 12, 13, 14, 15];
let answer = a.reduce(function (acc, value) {
  console.log(acc, value);
  return acc + value;
}, 0);
console.log(answer);
