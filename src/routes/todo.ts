import { Router } from "express";
import {createTodo,getTodo,deleteTodo,updateTodo} from '../controllers/todo'
const router=Router()

router.route(`/`).get(getTodo).post(createTodo)
router.route(`/:id`).patch(updateTodo).delete(deleteTodo)



export default router