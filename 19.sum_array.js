// Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.

let matrix = [[4,5,8],[9,1,6],[10,5,3]];
let dim_matrix = []
function myfunc(i, j) {
    return i += j
}
for (let i = 0; i < matrix.length; i++) {
    let x = matrix[i].reduce(myfunc)
    dim_matrix.push(x)

}
console.log(dim_matrix)


