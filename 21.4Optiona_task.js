// Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1

let n = 5;
let fact = 1;


for (let i = 1; i <= Math.abs(n); i++) {
    if (n < 0) {
        fact = NaN
        console.log("Enter a positive number")
        break
    } else if (n == 0) {
        console.log(1)
        break  
    } else {
        fact *= i
        
    } 
}
console.log(fact)
        
  


