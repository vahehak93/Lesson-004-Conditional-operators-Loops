// Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
// numbers in a separate array. Arrange them such as from the beginning are the odds and from the
// ending the evens.

let arr = ["abc", 10, "a", 5, "b", 7, null, 3, 6, 4];
let new_arr_odds = [];
let new_arr_evens = [];


for (let i = 0; i < arr.length; i++) {
    if ((typeof arr[i]) === "number") {
        if (arr[i]%2 != 0) {
            new_arr_odds.push(arr[i])
        } else {
            new_arr_evens.push(arr[i])
        }
    }
}
let arranged_arr = new_arr_odds.concat(new_arr_evens);

console.log(arranged_arr)