 import { apiResponse } from "../utils/apiResponse.js";
 import { asynchandler } from "../utils/asynchandler.js";

 const healthCheck = asynchandler(async(requestAnimationFrame,res)=>{
return res
    .status(200)
    .json(new apiResponse(200,"ok","health check passed"))
 })
 export {healthCheck}