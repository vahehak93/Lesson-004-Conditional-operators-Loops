// Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.

let matrix = [[4,5,8],[9,1,6],[10,5,3]]
let dim_matrix = []
let x = 0;
let y = 0;

for (let i = 0; i <= matrix.length; i++) {
    x++
    x += matrix[0][i]
}
console.log(x)