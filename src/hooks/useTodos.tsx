import { useState, useEffect } from "react";
import { Todo } from "../types/types";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const localTodo = JSON.parse(localStorage.getItem("todos") || "[]");
    if (localTodo) {
      setTodos(localTodo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([{ text, Completed: false }, ...todos]);
  };

  const toggleCompleted = (index: number) => {
    const updateTodos = todos.map((todo, i) =>
      i === index ? { ...todo, Completed: !todo.Completed } : todo,
    );
    setTodos(updateTodos);
  };

  const editTodo = (index: number, newText: string) => {
    const updateTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo,
    );
    setTodos(updateTodos);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter((todo) => { 
    if (filter === "completed") return todo.Completed;
    if (filter === "incompleted") return !todo.Completed;
    return true;
  });

  return {
    todos: filteredTodos,
    addTodo,
    toggleCompleted,
    editTodo,
    removeTodo,
    filter,
    setFilter,
    setTodos,
  };
};

export default useTodos;
