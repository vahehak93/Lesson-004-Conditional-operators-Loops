// Enter a number. Find the difference between its biggest and smallest digits.

let num = 55459132165; //65426513
let str_num = String(num)
let arr = str_num.split("").map(Number);
let max_value = Math.max.apply(null, arr);
let min_value = Math.min.apply(null, arr);
let diff = max_value - min_value
console.log(diff)
console.log(max_value,min_value)

