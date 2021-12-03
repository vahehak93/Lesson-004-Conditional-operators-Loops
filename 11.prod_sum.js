// Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
// sum, print the quotient, otherwise print the remainder.

let num = 4569;

let str_num = String(num);
let arr = str_num.split("").map(Number);
let arr2 = [];
let sum_num = 0;
let prod_num = 1;

for (let i = 0;i < arr.length;i++) {
    if (num == 0) {
        console.log("Cannot calculate.")
        break
    }else if (num < 0) {
        console.log("Enter a positive number.")
        break
    }else {
        sum_num += arr[i]
        prod_num *= arr[i]
    }
}

console.log(`Quotient is ${(prod_num/sum_num)}`)
console.log(`Remainder is ${(prod_num%sum_num)}`)







