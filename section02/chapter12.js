// function add(a,b, callback){
//   setTimeout(()=>{
//     const sum = a+b;
//     callback(sum);
//   }, 3000)
// }

// // sum 값을 함수 외부에서도 사용하고 싶을 때
// add(1,2, (value)=>{
//   console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "치킨";
    callback(food);
  }, 3000);
}

//음식을 시키는 함수
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

// 식은 음식을 냉동해버리는 함수
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// 콜백 지옥 상황
orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

