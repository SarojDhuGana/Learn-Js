// Q.1----
let a = true;
let b = false;
let z = true + false;
console.log(z);
//  ------ans: 1    ;because in boolen operation in programming true is 1 and false is 0


// Q.2-------
let i = 20;
let j = ++i + 20; {
    console.log(j);
}
j = i++ + 25;
console.log(j);
// ----- ans: 41 and 46;


// Q.3-------

console.log(typeof (NaN));
//  -----ans: number; not string not object;

// Q.4---------
const x = 10;
const y = 20;
const z1 = (x > y) ? x : y;  //   x=(condition)? True:false ;this is ternary operatior
console.log(z1);
//  ans: 20;

// Q.5 ------------------

const fruits = ["banana", "mango", "orange", "papya"];
let arr = Array.isArray(fruits);
console.log(arr);
// ans: true;
// how we identify this is array:  Array.isArray(fruits);

// Q.6----------------------------------
let nums = [4, 9, 16, 25];
let sqrt = nums.map(num => Math.sqrt(num));
console.log(sqrt);
// ans: 2,3,4,5

// Q..7-------------
// var fun="500";
// function fun(fun){
//     console.log(fun);
// }
// fun(1214);
// ans: Error  ;fun is not a function

// Q.8-------------

let number = [1, 2, 3, 4, 5, 6];
number.length = 3;
console.log(number);
// ans: 1,2,3;

// Q.9------------------
function Harry(name) {
    this.name = name;
}
const dog = new Harry("petter");
console.log(dog instanceof Harry);  // instanceof is use to check the type of  object in the run time. and it returns the boolen value...

// ans: true ;because dog is the object of harry.....

// Q.10---------
const x1 = "web devs!";
console.log(x1.startsWith("web"));
console.log(x1.endsWith("devs"));
// ans: true false;

// Q.11-------
const num1 = [1, 2, 3, 4];
for (let i = 0; i < num1.length; i++) {
    if (i == 2) {
        continue;
    }
    console.log(num1[i]);
}
// ----------------ans: 1,2,4

// --------Q.12
const name = ["saroj", "sushmita", "hari", "ram"];
for (let i = 0; i <= name.length; i++) {
    if (i == 3) {
        break;
    }
    console.log(name[i]);
}
// ans: saroj sushmita hari;


// Q.13...........
const x2 = null;
if (x2 == undefined) {
    function x2(m) {
        console.log(m);
    }
    x2(399);

}
// ans: 399;

// Q..14
const p = undefined;
console.log(p == null);

// ans: true;

// Q.15-------------------
var n = 11;
function myfun(n) {
    if (n <= 1) {
        return n;
    }
    return console.log(n);
}
myfun(10);
// ans: 10

// Q.16
const nums1 = 10;
const nums2 = nums1 >> 1;
console.log(nums2);
// ans: 5;


// Q.17----------

const num = 10;
if (true) {
    const num = 15;
}
console.log(num);
// ans: 10;

// Q.18-------------

var st = 100;
function funny() {
    console.log(st);
    st = 20;
    console.log(st + 20);
}
funny();

// ans: 40;

// Q.19------
const q = [null, , null];
console.log(q[1]);
// ans: undefined;

// Q.20------
const f=!!0;
console.log(f);
// ans: false;

// Q..21
const nu=[1,2,3, ,4]
const nu_1= nu.fill(0);
console.log(nu_1);
// ans: 0,0,0,0;

// Q..22
const obj={
    num: 10,
}
delete obj.num;
console.log(obj.num);
// ans: undefined;

// Q.23-----
let result=((x)=>{
  return x*3;
})(10);