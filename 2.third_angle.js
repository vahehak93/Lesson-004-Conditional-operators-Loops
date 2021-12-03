// Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
// the angles of a triangle equals 180 degrees).

let angle1 = 260
let angle2 = 15

if ((angle1 + angle2) >= 180) {
    console.log(`Sum of ${angle1},${angle2} must be less then 180`)
}else if ((angle1 + angle2) <= 0) {
    console.log(`Angles must be positive number`)
}else {
    console.log(180 - (angle1 + angle2))
}
