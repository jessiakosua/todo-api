import { TodoMode1 } from "../models/todo.js";

export const addTodo =async ( req, res, next) => {
   try {
     //validate user inputs
     // write todo to database
     //console.log(req.body);
     await TodoMode1.create(req.body);
     // respond to request
     res.status(201).json('Todo was added');
   } catch (error) {
    next(error);
   }
}

export const getTodos =async ( req, res, next) =>{
    try {
        //fecth todos from database
const todos =await TodoMode1.find();
        // return response
        res. status(200).json(todos);
    } catch (error) {
        next(error)
    }
}

export const updatedTodo =(req, res, next) =>{
    res.json('Todo updated!');
}


export const deleteTodo =( req, res, next) =>{
    res.json('Todo deleted!');
}