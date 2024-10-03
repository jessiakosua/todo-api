import { Schema,model } from "mongoose";

const todoSchema = new Schema({
    title: {type: String, required: true},
    completd:{type: Boolean, default:false}
});

export const TodoMode1 = model('todo',todoSchema);