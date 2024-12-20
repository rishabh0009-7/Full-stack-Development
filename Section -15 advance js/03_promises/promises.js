//promises --> are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// what is call back agar function call mai hi function bana diya to vo callback hai 
// hello(()=>{

// })
// hello call tha kisi function ka uske andar humne arrow function bana diya tpo vo callback 

// promise can be in 3 states pending, fulfilled, rejected
// how to create promise 
function fetchData(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        let  success = true
        if(success){
           resolve ("Data fetched successfully") 
        }else{
            reject("error fetching data")
        }
    }, 3000); 
    })
}

// how to consume promise  
// fetchData()
//      .then((Data)=> console.log(Data))
//      .catch((error)=> console.log(error))
//output --> Data fetched successfully becoz humne true diya tha starting mai 
// whatever we passs on success is linked to then and whatever is passed on reject is linked to catch


// we can also add things we want to show in then and catch 
fetchData()
  .then((Data) => {
    console.log(Data)
    return `rishabh`
})
.then((value)=>{
console.log(value);

})
  .catch((error) => console.log(error));

