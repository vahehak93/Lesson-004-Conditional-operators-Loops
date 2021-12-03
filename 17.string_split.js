// Given a sentence as a string. Split it according to space and comma and create an array consisting of
// the words of the array. The last word should not contain the last . or ! .

let sent = "May the Force be with you.";
let x = sent[(sent.length-1)]

if (x === "." || x === "!") {    
    new_sent = sent.replace(x,"")
}

let arr =new_sent.split(" ");

console.log(arr)
