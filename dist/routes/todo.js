"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const router = (0, express_1.Router)();
router.route(`/`).get(todo_1.getTodo).post(todo_1.createTodo);
router.route(`/:id`).patch(todo_1.updateTodo).delete(todo_1.deleteTodo);
exports.default = router;
