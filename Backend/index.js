import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import connectDB from './db/connectDB.js'
import { Task } from './models/task.schema.js'
import cors from "cors"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/api/v1/tasks",async(req,res)=>{
    try {
        const tasks = await Task.find({})
        return res.status(200).json({message:"successfully fetched the tasks items",tasks})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
        
    }
})

app.post("/api/v1/tasks",async(req,res)=>{
    const {title,description,priority,status} = req.body

    if(!title || !description || !priority || !status){
        return res.status(400).json({message:"Please fill all the fields"})
    }

    try {

        const task = await Task.create({title,description,priority,status})

        return res.status(200).json({message:"successfully created the task",task})
        
    } catch (error) {

        console.log("error on create task",error)
        return res.status(500).json({message:"Internal server Error"})
        
    }


})

app.delete("/api/v1/task/:id",async(req,res)=>{
    const {id} = req.params

    try {
        
        await Task.findByIdAndDelete({_id:id})

        
        return res.status(200).json({message:"Deleted Successfully"})
    } catch (error) {
          console.log("error on delete task",error)
        return res.status(500).json({message:"Internal server Error"})
        
        
    }
})

app.get("/api/v1/task/:id",async(req,res)=>{
    const {id} = req.params
    try {
        const task = await Task.findById({_id:id})
        return res.status(200).json({task})
    } catch (error) {
        
          console.log("error on get one task",error)
        return res.status(500).json({message:"Internal server Error"})
    }
})

app.put("/api/v1/task/:id",async(req,res)=>{
    
    const {id} = req.params

    console.log(req.body,id)
    const {title,description,priority,status} = req.body


    try {
        const task = await Task.findByIdAndUpdate(id,{title,description,priority,status},{new:true})
        console.log(task)

        return res.status(200).json({message:"successfully updated the task",task})
        
    } catch (error) {

        console.log("error on updated field",error)
        return res.status(500).json({message:"Internal server Error"})
        
    }



})

app.listen(3000,()=>{
    connectDB()
    console.log("server is running on port 3000")
})