// Print the following pattern:

let n = 4;
let string = "";
let count = 1;
let count1 = 2;

for (let i = 1; i <= n; i++) {
    // string += count;
    count++;
    for (let j = 2; j <= i; j++) {
        string += count;
        count1++;
        
        
    //     for (let k = 1; k <= j; k++) {
    //         for (let x = 1; x <= j; x++) {

    //         string += count;
    //         count++;
    //         }
    //     }
    }
    string += "\n"
}
console.log(string)