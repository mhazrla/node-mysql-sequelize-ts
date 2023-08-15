import { RequestHandler } from "express";
import { Todos } from "../models/todo"

export const createTodo: RequestHandler = async (req, res, next) => {
    var todos = await Todos.create({ ...req.body })
    return res.status(200).json({ message: "Created", data: todos })
}

export const deleteTodo: RequestHandler = async (req, res, next) => {
    const { id } = req.params
    const deletedTodo: Todos | null = await Todos.findByPk(id)
    await Todos.destroy({ where: { id } });

    return res.status(200).json({ message: "Deleted", data: deletedTodo })
}

export const getAllTodo: RequestHandler = async (req, res, next) => {
    const allTodos: Todos[] = await Todos.findAll();
    return res.status(200).json({ message: "Fetched", todos: allTodos })
}

export const getTodoById: RequestHandler = async (req, res, next) => {
    const { id } = req.params
    const todo: Todos | null = await Todos.findByPk(id)
    return res.status(200).json({ message: "Fetched by ID", todo })
}

export const updatedTodo: RequestHandler = async (req, res, next) => {
    const { id } = req.params
    await Todos.update({ ...req.body }, { where: { id } })
    const updatedTodo: Todos | null = await Todos.findByPk(id);
    return res.status(200).json({ message: "Created", data: updatedTodo })

}