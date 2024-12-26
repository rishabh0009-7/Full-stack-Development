const http = require('http')
const hostname = '127.0.0.1'
const port = 3000


const server = http.createServer((req,res)=>{
 if(req.url ==='/'){
       res.statusCode = 200 
   res.setHeader('content-type','text/plain')
   res.end("hello ice tea")

 }else if(req.url ==='/ice-tea'){
      res.statusCode = 200 
   res.setHeader('content-type','text/plain')
   res.end("thanks for ordring ice tea, its really hot ")

 }else{
    res.statusCode= 404
    res.headers = ('content-type','text/plain')
    res.end("404 not found")
 }
})

server.listen(port,hostname,()=>{
    console.log(`server is listening at http://${hostname}:${port}`);
    


})

// we will not write next time this much line of code  it is not scalable to build a web server in node js  we wil use framework --> express 