// every programming language has some way of writing code like prototype programming , oop , etc

// js was a prototype based programming language  but for new programmer that comes from different programming language it was challenging so tehy switch to oop
// under the hood (bts) its still a prototype based language
// class-object based programming is also known as oops
// oops is just a mask of javascript but in relity behind the scene  which we never see it is all prototype based 
// see image prototype2.png


// prototype --> means extra properties/ method and functioanality given in a datatype like array , string , objects  , etc 
// go to inspect create an array and see prototype 

let computer = {
    cpu :12,

}
// how to access prototype
console.log(`computer`, computer.__proto__); //__ --> is known as dunder 


let lenovo = {
    screen :"hd",
    // if we want to use data of other object 
    __proto__:computer  // old way 
}
console.log("lenovo:", lenovo.__proto__);

// new way of giving prototype
let genericCar ={
    tyres:4
}
let tesla ={
    driver :"ai" //own property 

}

Object.setPrototypeOf(tesla,genericCar)
// console.log(`tesla`,tesla); 

// output
// tesla { driver: 'ai' } why it is not showing  injected property tyres ????? becoz console mai aise nhi likhna 
console.log(`tesla`, Object.getPrototypeOf(tesla));//tesla { tyres: 4 } --> inheritance property



// own property--> checks given object has data which has  its own property or not  by giving boolean output
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false


