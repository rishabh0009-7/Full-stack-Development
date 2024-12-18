// constructor function -->In JavaScript, a constructor function is a special type of function used to create and initialize objects. It is typically used when you want to create multiple objects that share the same structure and behavior. ex - google form 
// constructor function 
function person (name,age){
    this.name = name 
    this.age = age 

}

//another example 
function car (make, model){
    this.make = make 
    this.model = model  

}
// creating object
let mycar = new car("toyota","camry") 
console.log(mycar);

let mynewCar = new car("tata", "safari")
console.log(mynewCar);



//another example 
 function Tea(Type){
    this.Type = Type
    this.description = ()=>{
        returm`this is a cup of ${this.Type}`
    }

 }
// object
 let lemonTea = new Tea("lemon Tea")


// another example
function animal (species){
    this.species= species

}

// we can also create prototype
animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}
 let dog = new animal ("dog")

//  error handling 

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name = name 
}

let tea = new Drink("tea"
    
)
let coffee = Drink("tea")