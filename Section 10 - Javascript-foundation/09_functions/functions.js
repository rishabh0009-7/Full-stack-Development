//1 write a function named 'makeTea' that takes one parameter , 'typeofTea', and returns a string like  `"making green tea ",`when called with  `"green tea "` . store the result in a variable named `teaOrder`

// p for parameter and p for placeholder
// function makeTea (typeofTea){
//   return `making ${typeofTea}`

// }
// let teaOrder = makeTea("lemon tea")
// console.log(teaOrder);


// 2 create a function named `orderTea ` that takes one parameter , `teaType`. Inside this function , create  another function named `confirmOrder` that returns a message like `"order confirmed for chai "`.  call `confirmOrder` from within `orderTea` and return the result

// function orderTea (teaType){
//   function confirmOrder(){
//     return ` order confirmed for chai`
//   }
//   return confirmOrder()
// }
// let orderConfirmation = orderTea("chai")
// console.log(orderConfirmation);

// first order tea will execute and it will create an executable context (working environment )  then it will call confirm order then it will create an executable context then it return ordeer confirmed for chai 



/*3 write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity` . The function should return the total cost by multiplying the `price` and `quantity `
store the result in a variable named `totalCost`


// */

// const calculateTotal = (price,quantity)=> price*quantity


// let totalCost = calculateTotal(499*567)


//-------------------------------------------
// higher order function --> when function is treated like any other variable 
// ex-foreach


//4 write a function named  ` processTeaOrder` that takes another function , `makeTea`, as a parameter and calls it with the argument `"earl grey "`
// return  the result of calling `makeTea`


// type of tea and tea functions are just names we can write anything in place of place holder
// function makeTea(typeofTea){
//   return `maketea:${typeofTea} `

// }
// function processTeaOrder (teaFunction){
// return teaFunction('earl grey')
  
// }
// processTeaOrder(makeTea) //passing function as a parameter




// 5 write a function named `createTeaMaker` that returns another function . The returned function should take one parameter , ``teaType , and return a message like `"making green tea "`
// store the returned function in a variable named `teaMaker` and call it with `"green tea"`

function createTeaMaker(){
  return function(teaType){
    return `making ${teaType}`

  }

}
let teaMaker = createTeaMaker() //ye khaali isliye hai kyuki upper bhi khaali hai 
console.log(teaMaker("green tea"));


// in js createteamaker ke pass tea type ka acccess to hai hi saath saath tea type pe create teamaker ke bhi sab cheez ka access hai 
