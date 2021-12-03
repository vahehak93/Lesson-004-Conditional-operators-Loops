// Given an array of numbers and a number. Find the index of a first element which is equal to that
// number. If there is not such a number, that find the index of the first element which is the closest to it.

let arr = [5,-4,8,116,-30,156,11];
let num = 15;
let loop_count = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        console.log(`Index of number ${num}: ${i}`)
        break
    } else {
        loop_count++
        if (loop_count === arr.length-1) {
            let near = arr[0];
            let differ = Math.abs(num - near);
            for (i = 0; i < arr.length; i++) {
                let differ2 = Math.abs(num - arr[i]);
                if (differ2 < differ) {
                    differ = differ2
                    near = arr[i]
                }     
            }console.log(near) 
        }       
    }
}

