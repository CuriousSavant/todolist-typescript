import React, { useState } from "react";
import useTodos from "./hooks/useTodos";
import TodoFilter from "./Components/TodoFilter";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const TodoApp: React.FC = () => {
  const {
    todos,
    addTodo,
    toggleCompleted,
    editTodo,
    removeTodo,
    filter,
    setFilter,
    setTodos,
  } = useTodos();
  const [text, setText] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  const handleEditPrompt = (index: number, currentText: string) => {
    const newText = prompt("Edit Todo:", currentText);
    if (newText !== null && newText.trim() !== "") {
      editTodo(index, newText);
    }
  };

  return (
    <>
      <TodoForm
        text={text}
        onChangeInput={handleChangeInput}
        onSubmit={handleSubmit}
        setTodos={setTodos}
      />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        filterTodo={todos}
        toggleCompleted={toggleCompleted}
        editPrompt={handleEditPrompt}
        removeTodo={removeTodo}
      />
    </>
  );
};

export default TodoApp;
