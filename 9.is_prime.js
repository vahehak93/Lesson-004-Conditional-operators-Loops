// Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.

let num5 = 5;
count = 0
for (let i = 2; i < num5; i++) {
    if (num5%i == 0 || num5 == 0 || num5 == 1) {
        console.log("no")
        break
    } else {
        count ++
        if (count == num5-2) {
            console.log("yes")
        }  
    }
}

