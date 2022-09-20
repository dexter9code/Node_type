"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../model/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
        status: `Success`,
        data: newTodo
    });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.status(200).json({
        status: `Success`,
        data: TODOS
    });
};
exports.getTodo = getTodo;
const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error(`Could not found Todo!`);
    }
    TODOS.splice(todoIndex, 1);
    res.status(204).json({
        status: `Success`,
        data: null
    });
};
exports.deleteTodo = deleteTodo;
const updateTodo = (req, res, next) => {
    const updatedData = req.body.text;
    const id = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error(`Could not found Todo!`);
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedData);
    res.status(200).json({
        status: `Success`,
        data: TODOS[todoIndex]
    });
};
exports.updateTodo = updateTodo;
