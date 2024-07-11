let score =33
console.log(typeof score);
/*
number
number
*/
let score1 ="33abc"
let valueInNumber=Number(score1)
console.log(typeof valueInNumber);
//number
console.log(valueInNumber);
/* 
NaN  ->check value 
this the issues 
some times not convert 
*/
let score2 =null
// 0 
let score3=undefined;
//undefined
let score4=true;
//1
/*
"33"=> 33
"33abc "=> NaN
true=>1 ;False=>0
*/
let isLoggedIn=1;
let boolean_IsloggedIn=Boolean(isLoggedIn)
console.log(boolean_IsloggedIn);
//Output: true
//Let isLoggedIn=""
// Output: false 
//Let isLoggedIn="Ratul"
// Output: true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
//33
console.log(typeof stringNumber);
//string 






