// Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
// words from the array.

let sentence = "_, we have a _.";
let arr = ["Houston","problem"];
let x = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i]=== "_" && x < arr.length) {
        sentence = sentence.replace("_", arr[x]);
        x++
    }
}

console.log(sentence)