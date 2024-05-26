// 1. Date 객체를 생성하는 방법 
let date1 = new Date(); 
// console.log(date1);

let date2 = new Date("1999-01-07/10:10:10");
// console.log(date2);

// 2. 타임 스탬프 
// 특정 시간이 "1970.01.01 00:00:00"을 기준으로 몇 밀리초가 지났는지를 나타내는 ms값
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date4);

//3. 시간 요소들을 추출하는 방법 
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hours, minutes, seconds);

//4. 시간 요소들을 수정하는 방법 
date1.setFullYear(2000);
date1.setMonth(2);
date1.setDate(14);
date1.setHours(12);
date1.setMinutes(30);
date1.setSeconds(30);

// console.log(date1);

//5. 시간을 여러 포맷으로 출력하기 
console.log(date1.toDateString());
console.log(date1.toLocaleString());
