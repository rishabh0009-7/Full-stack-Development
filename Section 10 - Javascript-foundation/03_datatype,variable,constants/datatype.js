// most common javascript datatypes
/*
string 
number 
boolean
Bigint
undefined ( abhi kuch ni hai par future mai ho skta hai isliye vo jaga reserve rehti hai )
null(empty, it does not means 0)

objects
symbol

*/


// variable

// old way 
// var
// we can reassign and redeclare both
// var score = 102

// var a global variable  this means if we change  var value outside scope it will get change which is not  good as sometimes we dont remember variable name and if we change the value  outside scope it will create errors

// let
//we can reassighn but we cannot redeclare 
let score = 102 //number
let name = "Rishabh" //string
let isloggedin = false //boolean

let getscore = score // it is allowed 



//object
let array  =["lemon tea", "orange tea", "oolang tea "]

let object = {
    firtsname:"rishabh",
    lastname:"srivastav"
}

console.log(obejct);
console.log(array);
console.log(getscore);


letgameName = "spiderman"
gameName = "batman"

console.log(gameName); // batman 


// const 
// reassign redeclare not allowed 
const username = "rizz"
username = "rizz2" // not allowed