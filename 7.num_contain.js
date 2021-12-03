//Insert a digit and a number. Check whether the digits contains in the number or not.

let digit = 5;
let num = 52783;
let str_num = String(num)
let arr = str_num.split("").map(Number)
count = 0
console.log(arr)

for (let i of arr) {
    if (i === digit) {
        console.log("yes")
        break
    } else {
        count++
        if (count === arr.length) {
            console.log("no")
        }   
    }
}



