// 배열의 5가지 요소 순회 및 탐색 메서드 
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 매서드 

let arr1 = [1,2,3];

arr1.forEach(function(item, idx, arr){
  // console.log(idx, item*2)
})

let doubledArr = [];

arr1.forEach((item)=>{
  doubledArr.push(item*2)
})

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 포함되어 있는지 확인하는 매서드

let arr2 = [1,2,3];
let isInclude = arr2.includes(10); 

// console.log(isInclude);

// 3. indexOf
// 배열에 특정 요소가 몇번째 인덱스에 위치하는지 확인하는 매서드
// 단순 원시 타입의 값을 찾을 때 사용

let arr3 = [1,2,3];
let idx = arr3.indexOf(2);

// console.log(idx);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정 요소의 인덱스를 반환하는 매서드
// 복잡한 객체 타입의 값을 찾을 때 사용

let arr4 = [1,2,3];
const findedIndex = arr4.findIndex((item)=>item  %  2 !==0)

// console.log(findedIndex);


//5. find
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정 요소를 반환하는 매서드

let arr5 = [
  {name: "박지원"},
  {name: "김지원"},
];

const finded = arr5.find((item)=>item.name === "박지원")

console.log(finded);
