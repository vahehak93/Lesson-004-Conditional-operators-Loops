// Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
// new array where each element from that array is placed under the index of its value. Start from the
// smallest value and end with the biggest one. If there are missing values, put in its places undefined.

let arr = [4, 3, 0, 9];
let max_value = Math.max.apply(null, arr)
let arr2 = []

for (let i = 0; i <= max_value; i++) {
    for (let x = 0; x < arr.length; x++) {
        if (i === arr[x]) {
            arr2[i] = arr[x]
        } else {
            if (arr[i] === "undefined") {
                arr[i] =1;
            }
        }
    }
}
for (let i = 0; i < arr2.length; i++) {
    
    if (typeof arr2[i] === "undefined") {
        arr2[i] = undefined
    }  
}

console.log(arr2)

