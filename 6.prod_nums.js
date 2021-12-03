// Find the sign of product of three numbers without multiplication operator. Display the specified sign.

let x, y, z;
x = -15
y = 10
z = -30

if (x == 0 || y == 0 || z == 0) {
    console.log("unsigned")
} else if ((x > 0 && y > 0 && z > 0)) {
    console.log("+")
} else if ((x < 0 && y < 0 && z < 0)) {
    console.log("-")
} else if ((x > 0 && y > 0 && z < 0)) {
    console.log("-")
} else if ((x > 0 && y < 0 && z > 0)) {
    console.log("-")
} else if ((x < 0 && y > 0 && z > 0)) {
    console.log("-")
} else if ((x > 0 && y < 0 && z < 0)) {
    console.log("-")
}else if ((x < 0 && y < 0 && z > 0)) {
    console.log("-")
}else if ((x < 0 && y > 0 && z < 0)) {
    console.log("-")
}




