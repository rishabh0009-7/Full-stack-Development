const person={
    name :"rishabh",

    greet () {
        console.log(`hi i am ${this.name}`);
        
    }
}
person.greet() // hey i am rishabh aayega kyuki current context mai rishabh hai name
//as soon as we tranfer this into another variable it losts its current context
const greetFunction = person.greet
greetFunction() // hey i am undefined
//bind
// so now you have to manually bind the context
const BoundGreet = person.greet.bind({name:"rishabh"})
BoundGreet()