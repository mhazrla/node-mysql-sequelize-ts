import { Router } from "express";
import { createTodo, deleteTodo, getAllTodo, getTodoById, updatedTodo } from '../controller/todo';

const router = Router();

router.get("/", getAllTodo);
router.post("/", createTodo)
router.get("/:id", getTodoById)
router.patch("/:id", updatedTodo)
router.delete("/:id", deleteTodo)

export default router