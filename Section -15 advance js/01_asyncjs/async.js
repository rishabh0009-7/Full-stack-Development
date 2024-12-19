// synchronous code --> jo ki line by line run hota hai 
// console.log("Hello World");
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// asynchronous 
// setTimeout --> ek function hai jo ek time period ke baad run hota hai

function sayHello(){
    console.log("Hello");
    
}
setTimeout(() => {
    sayHello();
    
}, 5000);

console.log("Hello World");

for (let i = 0; i < 10; i++) {
  console.log(i);
} 
// event loop --> ek loop hota hai jo continuously check karta hai ki call stack me koi function hai vo execute ho skta hai ya nahi by javascript engine agar nhi to vo usse environment me pass kar deta hai jaha vo run ho skta hai  

// note --> js  inbuilt does not have the capability to run network calls and also some timer functions like setTimeout, setInterval, etc.  but still it can execute   by passing it to environmemt 
// check image2.png
// so what happen is that every single line of code that you write  goes into call stack and everytime  function ghoes into call stack then there is an event loop that checks if the call stack is empty or not if its not empty   and  it pass on that function to browser or code environment  which has the capability to run network calls and also some timer functions like setTimeout, setInterval, etc.  and then it goes to queue and here event loop job is to execute the function from queue to call stack and then it goes to call stack and then it gets executed and then it removes it 