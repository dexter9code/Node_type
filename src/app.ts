import express, {Response,Request,NextFunction } from 'express'
import todoRoutes from './routes/todo'
import { json } from 'body-parser'

const app=express()

app.use(json())
app.use(`/todos`,todoRoutes)

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({
        message:err.message
    })
})

const PORT=3000
app.listen(PORT,()=>console.log(`Listing in the ${PORT}`))

