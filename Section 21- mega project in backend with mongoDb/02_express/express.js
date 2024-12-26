//123 boilerplate code 
// npm i -D nodemon -- isse baar baar npm run start nhi likhna hoga apna aap reload ho jaayega changes pe 
//ab npm run start  nhi npm run dev hi karna hai 
//1
//import isliye likh payaa kyuk humne package.json  mai type:module iuse kiya agar vaha ye nhi karta to const express = require walaa use karna padta 

//here we have returned the data
import express from 'express'
//2
const app = express()
const port = 3000

//4
app.get('/',(req,res)=>{
   res.send('hello from rishabh') 
})
app.get("/ice-tea", (req, res) => {
  res.send("hello from rishabh");
});
app.get("/twitter", (req, res) => {
  res.send("rishabh.com");
});

//3
app.listen(port,()=>{
   console.log(`server is running at port :${port}...`);
    
})