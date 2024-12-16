// write a while loop that calculates sum of all numbers from 1 to 5 and stores the result in a variable  named sum
// 1+2
// let sum = 0 
// let i = 1
// while (i<=5){
//     sum = sum + i
//     i = i+1
// }
// console.log(sum); 


// write a 'while' loop that counts down from 5 to 1 and stores the number  in an array named 'countdown'

// let countdown= []
// i = 5
// while (i>=1){
//     countdown.push(i)
//     i--

// }
// console.log(countdown);


// // write a `do while` loop that prompts a user to enter their favourite tea type until they enter `stop`. store each type in an array named `teaCollection`.


// let teaCollection =[]
// let tea
// do {
//     prompt(`enter your fav tea (type "stop" to finish)`)

//     if (tea!== "stop"){
//         teaCollection.push(tea)
//     }

    
// } while (tea!=="stop");

// node js does not support prompt becoz its a browser thing so it will not run here 


// write a do while loop that adds a number from 1 to 3  and stores the result in a variable named total

let total = 0
let num = 1 
do {
    total = total+ num
    num++
} while (num<= 3);

console.log(total);

// write a for loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a  new array named 'multipliedNumbers'


let multipliedNumbers = []
let numbers = [2,4,6]

for (let i = 0; i<numbers.length; i++){
    multipliedNumbers.push(numbers[i]*2)

}

console.log(multipliedNumbers);


// write a for loop that list all the cities in the array ["paris","new york", "tokyo", "london"] and stores each city in a new array named 'cityList'

let cityList = []
let city = ["paris", "new york", "tokyo", "london"]

for(i = 0 ;i<city.length;i++){
    cityList.push(city[i])

}
console.log(cityList);
