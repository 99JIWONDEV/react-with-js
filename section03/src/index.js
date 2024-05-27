// const moduleData = require("./math")
// console.log(moduleData.add(1,2))
// console.log(moduleData.sub(1,2))

// const { add, sub } = require("./math")
// console.log(add(1,2))
// console.log(sub(1,2))

// es모듈을 사용할 때는 확장자까지 적어줘야 함. 
// import {add, sub} from "./math.js"
// import mul from "./math.js"

// console.log(add(1,2))
// console.log(sub(1,2))
// console.log(mul(1,2))


import randomColor from "randomcolor";

const color = randomColor();
console.log(color);