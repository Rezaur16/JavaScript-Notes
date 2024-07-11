//*************** Variables **********************

//Contrains

const accountId=144553;
// not changable 
console.log(accountId);
//144553
 let accountEmail="rezaurrahman@gmail.com"
 
 var accountPassword="12345"
     accountCity="Jaipur"
     // variable can be declare like this but this is not a good example
let accountState ;
// undefined if not insert the value then it will be undefined

// accountId=2 not allowed because const are not changlable 
console.log(accountId);
 //Assignment to constant variable.

 accountEmail="rratul@gmail.com"
 accountPassword="11221122"
accountCity="Dhaka"
console.table([accountEmail,accountPassword,accountCity,accountState])
/*
Print it Tabler Form 
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 'rratul@gmail.com' │
│ 1       │ '11221122'         │
│ 2       │ 'Dhaka' 

we can declare variable in javascript two ways 
    1.const
    2.let
    3.var not use 
    Prefer not to use var 
    because of issues in block scope and functional scope 
    Javascript  not working in scope 
    eg :
    {
       }
---------------------------------------------------------------------------------------
       if(){
       
       }
----------------------------------------------------------------------------------------

*/


