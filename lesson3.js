// for -------Loop
let i;
for (i = 1; i <= 4; i++) {
    console.log("Saroj dhungana");
}
console.log("loop has ended");


let sum = 1;
let a;
let n = 1;
for (let a = 1; a <= n; a++) {
    sum = sum + a;
    console.log("sum=", sum);
}

// While ------ loop
let j = 0;
while (j <= 5) {
    console.log("sushmita");
    j++;
}

// Do_While loop











// For - of loop
let str = "Dhungana";
for (let b of str) {
    console.log("b=", b);
}
// For-in loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }


// Practice question
// 1..print all even and odd numbers from 0 to 100.
let num;
let k = 10;
for (num = 0; num <= k; num++) {
    if (num % 2 === 0) {
        console.log("num=", num)
    }
    }

// 2.. Create a game where you start with only random game number.Ask the user to keep guessing the game number until the user enters correct value.


let gameNum=25;
let usernum=prompt("Enter random number");

while (usernum!=gameNum){
    usernum=prompt("you entered wrong number. Enter again!!");
}
alert("congratulation you guess right number"); 