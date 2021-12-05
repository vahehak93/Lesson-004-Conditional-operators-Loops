// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
// the last digit of the inserted number is 0, number remains the same.

let num = 2457;

if (num%10 == 0) {
    console.log(num);
} else if (num < 0) {
    console.log("negative number")
} else {
    let num_str = String(num);
    let new_arr = [];
    new_arr[0] = num%10;
    for (let i = 0; i < num_str.slice(1,num_str.length-2); i++) {
        new_arr.push(num_str[i])
        
    
    }
    new_arr.pop();
    swopped_num = Number(new_arr.join(""));
    console.log(swopped_num);
}





