// try to write a the following loop with while and do-while:
// for (let i = 0; i < a.length; i++) {
//     console.log("for", i, a[i]);
//     }

// While
a = [15,20,25,50]
let i = 0;

while (i < a.length) {
    console.log("for", i, a[i]);
    i++;
}

// do-while
numbs = [15,20,25,50]
let x = 0;

do {
    console.log("for", x, a[x])
    x++;
}
while (x < numbs.length);

