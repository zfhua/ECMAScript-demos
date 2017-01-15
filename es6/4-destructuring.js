
//
// 解构: destructuring
//

// es5
let cat = 'ken'
let dog = 'lili'
let zoo = {cat: cat, dog: dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}

// es6
let cat = 'ken'
let dog = 'lili'
let zoo = {cat, dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}
//
let dog = {type: 'animal', many: 2}
let { type, many} = dog
console.log(type, many)   //animal 2
