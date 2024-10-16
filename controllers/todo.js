import { TodoMode1 } from "../models/todo.js";
import { addTodoValidator } from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
  try {
    //validate user inputs
    const { error, value } = addTodoValidator.validate({
      ...req.body,
      icon: req.file.filename
    });
    if (error) {
      return res.staus(422).json(error);
    }

    // write todo to database
    await TodoMode1.create(value);
    //console.log(req.body);
    await TodoMode1.create(req.body);
    // respond to request
    res.status(201).json("Todo was added");
  } catch (error) {
    next(error);
  }
};

export const getTodos = async (req, res, next) => {
  try {
    const { filter = "{}" , limit =10, skip =o } = req.query;  
    //fecth todos from database
    const todos = await TodoMode1.
     find(JSON.parse(filter))
    .limit(limit)
    .skip(skip);
    // return response
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const updatedTodo = (req, res, next) => {
  res.json("Todo updated!");
};

export const deleteTodo = (req, res, next) => {
  res.json("Todo deleted!");
};

// export router
