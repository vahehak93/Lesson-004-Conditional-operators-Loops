// Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.

let arr = [5, 10, 25, "hi", "bye", 30, null, NaN, false, 50, "hello"];

let num_count = 0;
let str_count = 0;

for (let i = 0; i < arr.length; i++) {
    if ((typeof arr[i] === "number")) {
        num_count++
    }else if ((typeof arr[i] === "string")) {
        str_count++
    }

}
console.log(`Numbers: ${num_count}\nStrings: ${str_count}`)

