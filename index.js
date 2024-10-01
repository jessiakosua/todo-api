import express from "express";
import todoRouter from "./routes/todo.js";

//create an express app
const app = express();

//use routes
app.use(todoRouter);

//listen for incoming requests
app.listen(3000,  () => {
  console.log("app is listening on port 3000");
});
