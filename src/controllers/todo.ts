import { RequestHandler } from "express"
import { Todo } from "../model/todo"

const TODOS:Todo[]=[]

export const createTodo:RequestHandler=(req,res,next)=>{
    const text=(req.body as {text:string}).text
    const newTodo=new Todo(Math.random().toString(),text)

    TODOS.push(newTodo)

    res.status(201).json({
        status:`Success`,
        data:newTodo
    })
}


export const getTodo:RequestHandler=(req,res,next)=>{
    res.status(200).json({
        status:`Success`,
        data:TODOS
    })
}

export const deleteTodo:RequestHandler<{id:string}>=(req,res,next)=>{
    const id=req.params.id
    
    const todoIndex=TODOS.findIndex(todo=>todo.id===id)
    
    if(todoIndex<0){
        throw new Error(`Could not found Todo!`)
    }

    TODOS.splice(todoIndex,1)
    res.status(204).json({
        status:`Success`,
        data:null
    })
}


export const updateTodo:RequestHandler<{id:string}>=(req,res,next)=>{
    const updatedData=(req.body as {text:string}).text
    const id=req.params.id

    const todoIndex=TODOS.findIndex(todo=>todo.id===id)

    if(todoIndex<0){
        throw new Error(`Could not found Todo!`)
    }

    TODOS[todoIndex]=new Todo(TODOS[todoIndex].id,updatedData)

    res.status(200).json({
        status:`Success`,
        data:TODOS[todoIndex]
    })
}