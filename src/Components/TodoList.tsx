import React from 'react'
import { Todo } from '../types/types';

interface TodoProps {
    filterTodo: Todo[];
    toggleCompleted: (index: number) => void;
    editPrompt: (index: number, currentText: string) => void;
    removeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoProps> = ({ filterTodo, toggleCompleted, editPrompt, removeTodo }) => {
    return (
        <div className='space-y-4 max-w-md mx-auto'>
            {filterTodo.map((todo, index) => (
                <div key={index} className='bg-slate-300 rounded-lg px-4 py-2 flex justify-between items-center text-black'>
                    <h1 className={`${todo.Completed ? 'line-through' : ''}`}>{todo.text}</h1>
                    <div>
                        <button
                            onClick={() => toggleCompleted(index)}
                            className={`px-2 py-1 rounded-lg text-white ${todo.Completed ? 'bg-gray-500' : 'bg-green-500'}`}
                        >
                            {todo.Completed ? 'Undo' : 'Complete'}
                        </button>
                        <button
                            onClick={() => editPrompt(index, todo.text)}
                            className='bg-blue-500 px-2 py-1 rounded-lg text-white mx-2'
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => removeTodo(index)}
                            className='bg-red-500 px-2 py-1 rounded-lg text-white'
                        >
                            Del
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoList;
