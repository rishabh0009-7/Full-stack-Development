import React from 'react'
import { useState } from 'react';
// aise karna se console mai to change ho raha par ui mai nhi dikh raha 
// const App = () => {
//   let counter = 0

//   const addValue=()=>{
//     counter = counter+1
//     console.log(counter);
    
//   }

//   const removeValue = ()=>{
//     counter = counter -1
//     console.log(counter);
    
//   }
//   return (
//    <>
//    <h1>react </h1>
//    <h2>counter value :{counter}</h2>
//    <button onClick={addValue}>add value </button>
//    <button onClick={removeValue}>remove value </button>
//   <p>footer:{counter}</p>
//    </>
//   )
// }




// to fix this we hav eto use state 

const App = () => {

  const [counter , setCounter]= useState(0)

  const addValue = () => {
    setCounter(counter+1)
  };

  const removeValue = () => {
    setCounter(counter-1)
  };
  return (
    <>
      <h1>react </h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addValue}>add value </button>
      <button onClick={removeValue}>remove value </button>
      <p>footer:{counter}</p>
    </>
  );
};

export default App;

//note - interview 
// setcounter(countyer+1)
// setcounter(countyer+1)
// setcounter(countyer+1)
// setcounter(countyer+1)

// in output react will take all of them a s a bundle and  take only 1 out of all  if they are same 

// setcounter((pevcounter)=>prevcounter+1)
// setcounter((pevcounter)=>prevcounter+1)
// setcounter((pevcounter)=>prevcounter+1)
// setcounter((pevcounter)=>prevcounter+1)

//here in set counter there is a function which will take prev value so here it does not take it as a bundle taking all of them individually