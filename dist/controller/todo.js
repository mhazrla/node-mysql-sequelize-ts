"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedTodo = exports.getTodoById = exports.getAllTodo = exports.deleteTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var todos = yield todo_1.Todos.create(Object.assign({}, req.body));
    return res.status(200).json({ message: "Created", data: todos });
});
exports.createTodo = createTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedTodo = yield todo_1.Todos.findByPk(id);
    yield todo_1.Todos.destroy({ where: { id } });
    return res.status(200).json({ message: "Deleted", data: deletedTodo });
});
exports.deleteTodo = deleteTodo;
const getAllTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allTodos = yield todo_1.Todos.findAll();
    return res.status(200).json({ message: "Fetched", todos: allTodos });
});
exports.getAllTodo = getAllTodo;
const getTodoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todo = yield todo_1.Todos.findByPk(id);
    return res.status(200).json({ message: "Fetched by ID", todo });
});
exports.getTodoById = getTodoById;
const updatedTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield todo_1.Todos.update(Object.assign({}, req.body), { where: { id } });
    const updatedTodo = yield todo_1.Todos.findByPk(id);
    return res.status(200).json({ message: "Created", data: updatedTodo });
});
exports.updatedTodo = updatedTodo;
