// Enter a number. Reverse its first and last digits. Print the new number.

let num = 1234;
let str_num = String(num)
let arr = str_num.split("").map(Number)
arr2 = []

let i = arr.length-1

for (i; i < arr.length && i >= 0; i--) {
    if (str_num.length <= 1) {
        console.log(num)
    } else {
        arr2.push(arr[i]) 
    }     
}

str_arr2 = arr2.join("")
rev_num = Number(str_arr2) 
console.log(rev_num)

