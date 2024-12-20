//very rare case usage not in initial 5-6 coding year 
// iterator and generator
//generator function is a function that does not excute all the code at once . it does not execute the whole at once it pauses the execution at each yield keyword and resumes the execution when next() method is called
//instead of return it uses yield aur ek baar mai ek hi yeild execute hoga 


// generator function
function* numberGenerator (){
    yield1;
    yield2;
    yield3;

}
// let gen = numberGenerator()
// console.log(gen()); //error aayega 
// console.log(numberGenerator());// no error

// why??? this is happening
//there is special syntax for getting this  vo bhi ek saath 
let gen = numberGenerator();
console.log(gen.next().value); //123

// here next() is an iterator that  keep track of whole things available on the array 
