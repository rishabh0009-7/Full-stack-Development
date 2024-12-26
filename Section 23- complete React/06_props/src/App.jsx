import React from 'react'
import Cards from './Components/Cards'
Cards


const object = {
  name : "rishabh",
  age : 22,
  address:{
    city : "delhi",
    state : "delhi",
    country:"india"
  }
}

const App = () => {
  return (
    <>
    

      <Cards username = "rishabh"/>
      {/* <Cards  username = "json" post = "staff"/> */}
      {/* <Cards   myobject = {object}/> */}
    </>
  );
  
}

export default App