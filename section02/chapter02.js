// function returnFalse() {
//   console.log('False 함수');
//   return false;
// }
// function returnTrue() {
//   console.log('True 함수');
//   return true;
// }

// console.log(returnFalse() && returnTrue()); 

// 단락평가 활용사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person 값이 없음");
}
printName();
printName({ name: "박지원" });