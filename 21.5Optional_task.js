// Write a program to check the validity of password input by users. Validation :

let user_pass = "@@#123azAD&*^56!"
let letters_cap = "ABCDEFGHIKJLMNOPQRSTUVWXYZ";
let letters_small = "abcdefghikjlmnopqrstuvwxyz"
let nums = "0123456789";
let chars = "!@#$%^&*";
// let all_chars = "ABCDEFGHIKJLMNOPQRSTUVWXYZabcdefghikjlmnopqrstuvwxyz0123456789!@#$%^&*";
let letter_cap_count = 0;
let letter_small_count = 0;
let num_count = 0;
let char_count = 0;

for (let i = 0; i < user_pass.length; i++) {
    if ((user_pass.length) < 6 || (user_pass.length) > 16) {
        console.log("Invalid password: Lenght error")
        break
    } else if (letters_cap.includes(user_pass[i])) {
        letter_cap_count++
    } else if (letters_small.includes(user_pass[i])) {
        letter_small_count++
    } else if (nums.includes(user_pass[i])) {
        num_count++
    } else if (chars.includes(user_pass[i])) {
        char_count++
    } else {    
    }
}

let valid_count = (letter_cap_count + letter_small_count + num_count + char_count)

if ((letter_cap_count >= 1 && letter_small_count >= 1 && num_count >= 1 && char_count >= 1 && valid_count === user_pass.length)) {
    console.log("Valid password")
} else {
    console.log("Invalid password: Must have at least 1 capital,small letter and number and character")
}


