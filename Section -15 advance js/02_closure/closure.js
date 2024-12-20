// closure--> 1. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 


// agar function ke andar function hai toh usko closure kehte hai   // closure is a function inside a function

function outer (){
    let counter = 0;
    return function inner(){
        counter++;
        console.log(counter);
    }
}
let increment = outer()
console.log(increment());//`1
console.log(increment());//2
console.log(increment()); //3
