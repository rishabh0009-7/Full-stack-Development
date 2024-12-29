
// here extends Error is javascript inbuilt class for error handling and with this we have to use super() to call the parent class constructor
class apiError extends Error{
    constructor(
        statusCode,
        data,
        message = "error",
        errors= [],
        stack = ""
    
    
    
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false 
        this.errors = errors

        if(stack){
            this.stack= stack
        }else{
           Error.captureStackTrace(this,this.constructor) 
        }

    }

}
export{apiError}