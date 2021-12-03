// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
// of their lengths.


// let arr1 = ["anymore", "raven", "me", "communicate"];

let arr = ["wish", "slightly", "understand", "longer","you", "unexpected", "heart"];

let count_min = 0;
let count_max = 0;
let arr_len = []

if (arr.length === 0) {
    console.log(`Empty array`)
} else {

} for (let i = 0; i < arr.length; i++) {
    arr_len.push(arr[i].length)
}

let max = arr_len[0];
let min = arr_len[0];

for (let i = 0; i < arr_len.length; i++) {
    if (arr_len[i] > max) {
        count_max = i;
        max = arr_len[i] 
    } else if (arr_len[i] < min) {
        count_min = i;
        min = arr_len[i];
    }
}

console.log(`Maximum len: ${max}: Name: ${arr[count_max]}\nMinimum len: ${min}: Name: ${arr[count_min]}\nSum of max and min: ${max+min}`)

