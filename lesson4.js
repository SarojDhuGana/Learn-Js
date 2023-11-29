//  create Array 
// syntax: 
// datatype arryname=[information]
let studNam= ["saroj","dan","sushmita","ram"];
let info=["saroj",84,"kathmandu"];
let marks=[85,97,44,37,76,60];
console.log("marks=",marks);
console.log(marks.length);   // as in js length is the proporty of marks
console.log("studname=",studNam);

// Array indices
//syntax: array_name[index value]
console.log(marks[4]);
// Template literals in js ``
let output=`this is an example of array indices ${marks[0]} ${marks[1]}  ${studNam[1]}  `;
console.log(output);

// looping in array
for (let index = 0; index <= marks.length; index++) {
    console.log(marks[index]);
    
}

// for (const stud of studNam) {
//     console.log(stud);
//     console.log(stud.toUpperCase());
    
// }

// Practice question #
// Qs... for a given array with marks of student and find the average marks of the entires class.
let sum=0,avg;
for (let val of marks) {
    sum=sum+val;
}
console.log("sum=",sum);
 avg=sum/marks.length;
 console.log(`the average marks in class is ${avg}`);
 
//  Qs.2  for a given array with prices a 5 items -> [250,645,300,900,50].All items have a n offer of 10% OFF ON Them.Change the array to store final price after appluing offer.
let price_item=[250,645,300,900,50];

let i=0;
for(const val of price_item){ 
    let offer=val/10;
   price_item[i]=price_item[i]-offer;
   console.log(`the price after offer is ${price_item[i]}`);
    i++;
}

for (let i= 0; i < price_item.length; i++) {
let offer = price_item[i]/10;
price_item[i]-=offer;
console.log(price_item[i]);
    
}

let arr =[1,2,3,4,5,6,7];
console.log(arr);
let s1=arr.splice(2,0,101);
console.log(s1);


// practice question....

let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
console.log(companies);
let remove= companies.splice(0,1);
console.log("delete companies=",remove);
let replace= companies.splice(2,1,"ola");
console.log("replace companies",replace);
let add=companies.push("amazon");
console.log("the add companies at the end is ",add);