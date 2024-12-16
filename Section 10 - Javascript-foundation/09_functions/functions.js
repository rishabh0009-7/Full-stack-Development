// write a function named 'makeTea' that takes one parameter , 'typeofTea', and returns a string like  `"making green tea ",`when called with  `"green tea "` . store the result in a variable named `teaOrder`

// p for parameter and p for placeholder
function makeTea (typeofTea){
  return `making ${typeofTea}`

}
let teaOrder = makeTea("lemon tea")
console.log(teaOrder);


// create a function named `orderTea ` that takes one parameter , `teaType`. Inside this function , create  another function named `confirmOrder` that returns a message like `"order confirmed for chai "`.  call `confirmOrder` from within `orderTea` and return the result

function orderTea (teaType){
  function confirmOrder(){
    return ` order confirmed for chai`
  }
  return confirmOrder()
}
let orderConfirmation = orderTea("chai")


/* write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity` . The function should return the total cost by multiplying the `price` and `quantity `
store the result in a variable named `totalCost`


*/