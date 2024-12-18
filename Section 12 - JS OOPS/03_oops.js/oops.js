// oops --> its a paradigm of writing the code where the concept of objects comes into picture
// we want to create object that are instances of classes
// in world of js everything is an object

// objects
let car = {
  make: "toyota",
  model: "camry",
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start());

// ---------------------
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("john", 20);
console.log(john.name);

// prototypic chain
function animal(species) {
  this.species = species;
}

animal.prototype.speak = function () {
  return `${this.species} makes a sound`;
};
let dog = new animal("dog");

// example
Array.prototype.rishabh = () => {
  return `Custom method ${this}`;
};
let myArray = [1, 2, 3];
console.log(myArray.rishabh());

//class
// how to create class

// class vehicle    {

// }
// jo bhi cheez class ke andar jaati ahi vo methods hota hai

class vehicle {
  // constructor function is also method of a class
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return ` ${this.model} is a car from ${this.make} `;
  }
}

//inheritance--> Inheritance in JavaScript is a mechanism to enable one object (or class) to acquire properties and methods from another object (or class)
// prototype mai data hota tha prrototype inheritance mai  objects or class hoti hai
//uses extend keyword-- > isse uppar jo humne class / object banaya hai unse hum kuch bhi le skta hai

class carNew extends vehicle {
  drive() {
    // yaha humne make use kiya hai ko ki uppar walaa object mai tha using extend keyword which is an inheritance prototype
    return `${this.make} : this is an inheritance example`;
  }
}
let mycar = new car("toyota");
console.log(mycar.start());
console.log(mycar.drive());

// encapsulation--> restricting direct access to object data

class BankAccount {
  #balance = 100000; //encapsulation now iski direct accesss nhi hai  kisi pe
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getbalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();

// console.log(account.#balance); // nhi hoga access aise kyuki ye restricted hai

// how to access --> create a function aur fir isko access  karo
console.log(account.getbalance);

// abstraction -- > hides the complex implementation detail
class coffeeMachine {
  start() {
    return `starting the machine`;
  }

  brewCoffee() {
    //complex calculation
    return ` brewing coffee`;
  }

  pressButton() {
    let mssgone = this.start();
    let mssgtwo = this.brewCoffee();
    return ` ${mssgone} + ${mssgtwo}`;
  }
}
//class ko call karna hai to new keyword use karna hi hoga
let myMachine = new coffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressButton());

//polymorphism --> ability of something to have or to be displayed in more than one form

class bird {
  fly() {
    return ` flying....`;
  }
}

class penguin extends bird {
  fly() {
    return ` penguins cant fly...`;
  }
}

let Bird = new bird();
let Penguin = new penguin();
console.log(Bird.fly());
console.log(Penguin.fly());

//  yahi hai polymorphim

// static method --> special metyhod that can only be called by the class itself and no one call them except class

class calculator {
  static add(a, b) {
    return a + b;
  }
}
// let minicalc = new calculator()
// console.log(minicalc.add(3,4)); // it will not work becoz isme static laga diya tha humne to ye sirf class call se hi chalega

// how to run static
console.log(calculator.add(4, 5));

//getter and setters -> getters and setters are special methods in JavaScript that allow you to control how an object's properties are accessed or updated.

// class employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }


// }
// let emp = new employee("alice ", 50000)
// console.log(emp.salary);

//ab hum chahte hai object se koi propert le aur usko update kara  uske liye we use get set method 


class employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary;
    // we use _salary becoz in programming if we use _ it means getter and setter are about to come 
  }
  get salary(){
    return `you are not alllowed to see salary `
  }
  set salary (value){
    if (value<0){
        console.error("invalid salary ")
    }else {
        this._salary = value 
    }

  }
}
let emp = new employee("alice ", 50000);
console.log(emp.salary);  //you are not alllowed to see salary
console.log(emp._salary);  


