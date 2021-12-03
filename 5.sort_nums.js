// Given three numbers. Sort them by the ascending order.
let a = 8;
let b = 2;
let c = 10;

if(a < b && b < c) {
    console.log(a, b , c);
  } else if (a < b && c < b) {
    console.log(a, c, b);
  } else if (b < a && a < c) {
    console.log(b, a, c);
  } else if(b < a && c < a) {
    console.log(b, c, a); 
  } else if(c < a && a < b) {
    console.log(c, a, b);
  } else {
    console.log(c, b , a);
  }





