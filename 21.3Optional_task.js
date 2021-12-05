// Takes two arrays and insert the second array in the middle of the first array. The first array always has
// two elements.

let arr1 = [1,10];
let arr2 = [2,3,4,5,6,7,8,9];

let input_index = Math.round((arr1.length-1)/2);
// let arr3 = arr1.splice(input_index,0,arr2);

for (let i = 0; i < arr2.length; i++) {
    arr1.splice(input_index,0,arr2[i])
    input_index++
    
    
}
console.log(arr1)
