// primitive datatype
// strong,boolean,number,null,undefined ,symbol

// non primitive
// objects(arrays,functions,objects)

// numbers

// method1
let num1= 120
console.log(typeof num1);

//method 2 to find type
// let anotherbalance = new Number(120)
// console.log(anotherbalance.valueOf());


//boolean
let isActive = true
console.log(typeof isActive);

// null and undefined

//undefined

// let firstname 
// console.log(firstname); //undefined

letlastname = undefined
console.log(letlastname); //undefined


let  firstname = null
console.log(firstname);  //null


// strings
let mystring = "rishabh"
let mystring2 = 'rishabh'
 let username = 'rishabh srivastav'

 //if u want to combine string and variab;e
// old way 
 let oldgreet = mystring +""+ "rizz"

//  new way (using backtick)

let greet = `${mystring} rizz`
console.log(greet); //rishabh rizz

// symbol (it uniquely identifies and give unique value altogether)
// it internally generates unique values if not given
// symbol guaranteed to be unique

// let sM1= Symbol()
// let sM2= Symbol()

// console.log(sM1== sM2); //false 

let sM1= Symbol("rishabh")
let sM2= Symbol("rishabh")

console.log(sM1== sM2); //true


