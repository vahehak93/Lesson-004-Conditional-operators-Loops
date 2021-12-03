// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
// the last digit of the inserted number is 0, number remains the same.

let num = 2459;

if (num%10 == 0) {
    console.log(num);
} else if (num < 0) {
    console.log("negative number")
} else {
    let num_str = String(num);
    let num_arr = num_str.split("").map(Number);
    num_arr[0] = num%10
    num_arr[num_arr.length-1] = Number(num_str[0])
    swopped_num = num_arr.join("")
    console.log(swopped_num)
}

