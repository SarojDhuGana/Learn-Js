// Function and methods in js....
console.log("hello");
"abc".toUpperCase();
[1, 2, 3].push(4);

// function create

function myfunction() {
    console.log("welcome to js learn");
    console.log("we are learning js:");
}
myfunction();
// Argumnet pass function
function passFunction(msg) {
    console.log(msg);
}
passFunction("I love js", 100);
// function -> 2 number,sum;
function sum(x, y) {
    // x y work as local variables-> scope 
    s = x + y;
    return s;
}
let val = sum(2, 4);
console.log(val);

// Example of arrow function


const arrowfunction = (a, b) => {
    return a + b;
}


// q.s

function countvowels(str) {
    // arr=["a","e","i","o","u"];
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }

    }
    return count;
}
let value = countvowels("saroj");
console.log(value);


// In arrow function
const countvow = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }

    }
    return count;
}
let val2 = countvow("Dhungana");
console.log(val2);

// Foreach loops in array

let arr = [1, 2, 3, 4];
arr.forEach(function numprint(vak) {
    console.log(vak);
})


// Q.s-> for a given array oif numbers print the square of each value using the foreach loop.

let nums = [1, 2, 3, 4, 5];
nums.forEach((num) => {
    console.log(num * num);
})

// map 

let number = [30, 20, 40, 20];
let numb1 = number.map((val) => {
    return val * val;
})
console.log(numb1);
console.log(number);

// filter

let arr1 = [1, 2, 3, 4, 10, 2];
const currentvalue=2;
const sum1 = arr1.reduce((acc, currentvalue) => {
    // return acc + currentvalue;
    return (acc>currentvalue)? acc: currentvalue;

})
console.log("reduce methods to do sum of array index:",sum1);
let newarr1 = arr1.filter((val) => {
    return val % 2 === 0;
    return val > 3;

})
