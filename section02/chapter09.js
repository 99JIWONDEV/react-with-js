// 5가지의 배열 변형 매서드 
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링해서 새로운 배열을 만든다.

let arr1 = [
  {name: "박지원", hobby: "테니스"},
  {name: "김효빈", hobby: "테니스"},
  {name: "홍길동", hobby: "독서"},
]

const tennisPeople = arr1.filter((item)=> item.hobby === "테니스")
// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순환하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환 
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr)=>{
    return item * 2
})

// console.log(mapResult1);

const peopleName = arr1.map((item)=> item.name)
// console.log(peopleName);

// 3. sort
// 배열의 요소를 사전순으로 정렬하는 메서드

let arr3 = [1, 3, 2, 5, 4];
arr3.sort((a,b) => {
  if(a > b){
    //b가 a 앞에 와라 
    return 1;
  }else if (a < b){
    //a가 b 앞에 와라
    return -1;
  }else{
    //순서를 바꾸지 않는다.
    return 0;
  }
  // 내림차순은 반대로..
});

// console.log(arr3);

// 4.toSorted
// 배열의 요소를 정렬한 후, 그 결과를 반환한다. 원본 배열은 변하지 않는다.
let arr4 = ["c", "a", "b"];
const sorted = arr4.toSorted();

// console.log(sorted);
// console.log(arr4);

//5. join
// 배열의 모든 요소를 문자열로 변환한 후, 이를 연결해서 하나의 문자열로 반환한다.

let arr5 = ["hi", "im", "jiwon"];
const joined = arr5.join(" ")

console.log(joined);