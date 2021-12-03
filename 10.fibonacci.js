// Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak =
// ak-1 + ak-2)

let fib_n = 10;

if (fib_n == 0) {
    console.log(0)
} else if (fib_n == 1 || fib_n ==2) {
    console.log(1)
} else {
    x = 0
    y = 1
    for (let i = 1; i <= fib_n-1; i++) {
        z = x + y
        x = y
        y = z
    }
}
console.log(y)