console.log(1);

// 비동기 함수 setTimeout
// Web APIs 영역에 이 함수를 대신 실행해달라고 요청
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);

//WebAPIs에서 비동기 작업 (3초세기)가 끝났다면 콜백함수를 반환 하고 호출(자바스크립트에서)
