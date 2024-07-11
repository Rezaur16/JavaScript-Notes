// Primitive Data types
 /*
7 types
1)String 
2)Number 
3)Null 
4)Boolearn 
5)null
6)undefined
7)Symbol
8)BigInt
 */
const score =false;
// Static or Dynamic ?
//Dynamic Typing: Variables in JavaScript can hold any type of data, and their type can change at runtime.
/*for eg:

let x = 42;      // x is a number
x = "Hello";     // x is now a string

*/


const id=Symbol('123')

const anotherId=Symbol('123')
console.log(id==anotherId);// false
const BigInt=123232323232n
// bigint
//Non Primitive or Reference 
/*
1)Array 
2)Objects
3)Functions
*/
const heros=["shakitiman", "naagraj","doga"]
{
    let myObj={
    name:"Ratul",
    age:22,
}
}
// Function be like variable 

const myFunction=function(){

    console.log("Hello World")
}
console.log(typeof BigInt)//bigint
console.log(typeof myFunction)//object function