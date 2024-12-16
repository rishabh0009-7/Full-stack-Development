// nonprimitive


// let username ={
//     firstname:"rishabh",
//     isLoggedin:true,

// }

// in object even const can be changed 

const username = {
  firstname: "rishabh",
  isLoggedin: true,
};
username.firstname ="sarthak"
username.lastname = "choudhary"
// how to access
//method1
console.log(username.firstname);
console.log(username.lastname);
console.log(typeof username);


//method2 // good way 
console.log(username[firstname]);


// array 
let hero = ["a","b","c"]
// how to access
console.log(hero);
console.log(hero[0]);
console.log(hero[2 ]);

// type conversion 
// js implicit conversion is weird it can give any output  thats why people converting into typescript becoz it focuses on datatype

let isvalue= true
console.log(isvalue+1);  //2




// explicit type conversion


let isvalue1 = "2"
console.log(number(isvalue)+1);  //3

console.log(number(null));  //0
console.log(number(undefined)); //nan--> not a number



