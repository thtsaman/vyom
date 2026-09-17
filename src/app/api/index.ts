import express, { Request, Response } from "express";


const app=express();

app.use(express.json());


app.get("/",(req:Request,res:Response)=>{
    try{
        res.status(200).json({message:"Working"});
    }catch(error){
        res.status(500).json({message:"Internal Server Error",error});
    }
})

export default app