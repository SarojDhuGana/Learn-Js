// ------------=------------Arithmetic operators
let a=10;
let b=20;
console.log("a+b =",a+b);
console.log("a-b =",a-b);
console.log("a*b =",a*b);
console.log("a/b =",a/b);
console.log("a%b =",a%b);
console.log("a**b =",a**b);

//------------- UnaryOperator----------
console.log(a++);
console.log(b--);
console.log(a);
console.log(++a);


// Assignment operator

let c=2;
let d="4";
console.log("c+=d=" , c+=d);
console.log("c-=d=" , c-=d);
console.log("c%=d=" , c%=d);

// // comparision operator 
console.log("a==c=",a==c);  // equal to
console.log("a!=c=",a!=c);  // not equal to
console.log("a!==c=",a!==c);// not equal to 
console.log("a===c=",a===c);


// logical operator
let cond1= a>b;  //false
let cond2= a!=b; // true
console.log(cond1&&cond2); //false



//  condition statement

// ---------------if 
let age=20;
if (age>=18){
    console.log(age,"can vote");
}
if (age<18){
    console.log(age,"can't vote");
}

// -------------if-else
let age1=17;
if (age1>=18){
    console.log(age1,"can vote");
}
else{
    console.log(age1,"can't vote");
}
//  ----------else-if
 if(age< 18){
    console.log("junior");
 }else if(age >= 18){
    console.log("middle");
 }
 else{
    console.log("Adult");
 }


//  Ternary operator

let price=1000;
 
price >=2000 ? console.log("expensive"): console.log("cheaper"); // true=cheaper false=expensive


// prompt

let num=prompt("Enter any number");
console.log(num);

//question
let marks=80;
 if (marks>=80 && marks<=100){
    console.log("student obtain A grade");
 }else if (marks>=70 && marks<=89){
    console.log("student obtain B grade");
 }else if(marks>=50 && marks<=69){
    console.log("Student obtain C grade");
 }
 else if(marks>=30 && marks<=49){
    console.log("student obtain D grade");
 }else{
    console.log("student obtain F grade");
 }

