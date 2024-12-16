// write a for loop taht loops through the array ["greentea","black tea", "chai", "oolang tea"] and stops the loop when it finds "chai".
// store all tea before "chai" in a new array named 'selectedTeas'

let tea = ["greentea", "black tea", "chai", "oolang tea"];
let selectedTeas = []
for(i=0;i<tea.length; i++){

  
    if (tea[i]="chai"){
        break
    }
      selectedTeas.push(tea[i]);


}


// write a for loop that loops through the array ["london", "new york","paris","berlin"]
// and skips "paris" store the  other cities in a new array named 'visitedCities'

let cities = ["london", "new york", "paris", "berlin"];
let visitedCities = []

for (i = 0; i<cities.length;i++){

    if(cities[i]=== "paris"){
        continue
        

    }

    visitedCities.push(cities[i])

}


// use a for of loop to iterate through the array  [1,2,3,4,5]and stop when the number 4 os found .
// store the number before 4 in an array named 'smallNumbers'
let numbers = [1,2,3,4,5]
let smallNumbers =[]

for (const num of numbers) {

    if (num === 4){
        break

    }
    smallNumbers.push(num)
    
}

// use a for of loop to iterate through the array ["chai","green tea","herbal tea","black tea"]  and skip "herbal tea"
// store the other teas in an array named "preferredTeas"

let teas = ["chai", "green tea", "herbal tea", "black tea"];

let preferredTeas = []
for (const i  of teas) {
    if(i === "herbal tea"){
        continue

    }
    preferredTeas.push(i)
}

// use a for-in loop to loop through an object containing  citu popultions. stop the loop when the population of "berlin " is found and store all previous cities population in a new object named 'cityPopulations'
// let citiesPopulation = {
// "london":8900000,
// "new-york": 8400000,
// "poaris":2200000,
// "berlin":3500000

// }


let citiesPopulation = {
"london":8900000,
"new-york": 8400000,
"paris":2200000,
"berlin":3500000
}

let cityPopulations ={}

for (const city  in citiesPopulation) {
    if (city == "berlin"){
        break

    }
    // array nhi hai object hai to push nhi kar skta 
    cityPopulations[city]= citiesPopulation[city]

    
}

// use a for-in loop to loop throughj an object containing city populations.
//skip any city with a population below  3 million and store the result in a new object named 'largeCities'

// let worldCities = {
//     "sydney":5000000,
//     "tokyo":9000000,
//     "berlin":3500000,
//     "paris":2200000


// }



let worldCities = {
  sydney: 5000000,
  tokyo: 9000000,
  berlin: 3500000,
  paris: 2200000,
};

let largeCities = {}
for (const city in worldCities) {
    if(worldCities[city]<3000000){
        continue
    }
    largeCities[city] = worldCities[city]
}

// write a foreach loop that iterates through the array ["earl grey", "green tea", "chai","oolang tea"] stop the loop when "chai" is found ans store all previous tea types in an array named "availableTeas"


let teaType = ["earl grey", "green tea", "chai", "oolang tea"];
let availableTeas = []

// for-each loop
teaType.forEach(tea => {
    if (tea==='chai'){
       return ;//break will not work inside for each becoz its inisdde function
    }
    availableTeas.push(tea)
    
});


// write a foreach loop that loops through the array ["sydney", "tokyo","paris","berlin"]
// and skips "sydney" store the  other cities in a new array named 'visitedCities'

let world2cities = ["sydney", "tokyo", "paris", "berlin"];
let visited2Cities =[]

world2cities.forEach(city => {
    if(city === "sydney"){
        return
    }
    visited2Cities.push(city)
    
});

//write a for loop that iterated through the array [2,5,7,9]. skip the value `7` and multiply the rest by 2 .
// store the results in a new array named `doubledNumbers`

let array = [2, 5, 7, 9];
let doubledNumbers = []

for(let i = 0;i<array.length; i++){
    if (array[i]==7){
        continue

    }
    doubledNumbers.push(array[i]*2)

}







// use a for-of loop to iterate through the array ["chai","green tea ","black tea","jasmine tea ","herbal tea"] and stop when the length of the current team is greater than 10 store the teas iterated over in an array named `shortTeas`

let arrayNew = ["chai", "green tea ", "black tea", "jasmine tea ", "herbal tea"];
let shortTeas= []
for (const tea of arrayNew) {
    if(tea.length>10){
        break

    }
    shortTeas.push(tea)
    
}