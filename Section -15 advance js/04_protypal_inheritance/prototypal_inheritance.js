// prototypal inheritance --> is a way to share methods and properties between objects in JavaScript
//

//object bnaya
function person (name){
    this.name = name 

}
let rishabh = new person("rishabh");
// greet naam ke function  mai humne prototype karaya hai person  ko  to hum greet mai person ki cheezein use kar raha hai 
person.prototype.greet = function (){
    console.log(`hello , my name is ${this.name}`);
    
}
rishabh.greet()

