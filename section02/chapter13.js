function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  return add10(result);
}).then((result) => {
  console.log(result);
}).catch((error)=>{
  console.log(error);
})

// return을 할 수가 있기 때문에 콜백 지옥에 빠지지 않을 수가 있음

// then 메서드
// promise 작업이 성공했을 때만 실행

// then과 catch를 같이 쓰는 경우를 promise chaining이라고 한다.
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
