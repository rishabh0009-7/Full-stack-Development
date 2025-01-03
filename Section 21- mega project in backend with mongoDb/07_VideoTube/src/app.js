import express from 'express';
import cors from  "cors"
const app = express()
// adding  middleware to the app
app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true

    })
)

//common middleware (
app.use(express.json({limit:'16kb'}))
app.use(express.json({extended:true, limit:'16kb'}))
app.use(express.static('public'))

// import routes 
import healthCheckRouter from "./routes/healthCheckRoutes.js" 

app.use("/api/v1/healthCheck", healthCheckRouter)

export {app}