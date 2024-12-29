const asynchandler = (requestHandler)=>{
    //next is middleware
    //we can also do it with try catch instead of promises 
    return (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))

    }


}
export {asynchandler}