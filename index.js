import express from "express";
import mongoose from "mongoose";
import todoRouter from "./routes/todo.js";
import userRouter from "./routes/user.js";

//connect to database
await mongoose.connect('mongodb+srv://TOdo-Api:todo-api@webdev-jess01.23fov.mongodb.net/todo-db?retryWrites=true&w=majority&appName=webdev-jess01');

//create an express app
const app = express();

//use routes
app.use(todoRouter);
app.use(userRouter);

//listen for incoming requests
app.listen(3000,  () => {
  console.log("app is listening on port 3000");
});
