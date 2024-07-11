//*************** Conversion Operation **********************
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

//***************Operations **********************
let value=3
let negvalue=-value
console.log(negvalue);
// -3 
  //console.log(2+2)
  //console.log(2-2)
  //console.log(2*2)
  //console.log(2**3)
  //console.log(2/3)
  //console.log(2%3)
  let str1="hello"
  let str2="hitesh"
  let str3= str1+str2
  console.log(str3);
  //hellohitesh
  console.log("1"+2)//12
  console.log(1+"2")//12
  console.log("1"+2+2)//122
  console.log(1+2+"2")//32
  // 7.11 To Primitive read
  console.log((1+2)* "2")//6
  console.log(+true);//1
//  console.log(true+);//error
 console.log(+"");//0
 let num1, num2,num3
 num1=num2=num3=2+2
 console.log(num1);//4
 //Postfix js mdn
 let gameCounter=100
 gameCounter++
 console.log(gameCounter);//101
 //Prefix js mdn
 let gameCounter1=100
 ++gameCounter
 console.log(gameCounter1);//100

  










