// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);

console.log("2">1);//true
console.log("02">1);//true

console.log(null > 0);//False
console.log(null>=0);//true
console.log(null == 0);//False
/*
The reason is that an equality check == and comparisions <> >= work differently 
comparisions convert null to a number treating it as  0
Thats why (3) null >=0 is true and (1) null > 0 is false
*/

console.log(undefined==0)//False
console.log(undefined > 0);//False
console.log(undefined < 0);//False

console.log("2"==2);//true

