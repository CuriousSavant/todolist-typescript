import React from "react";

interface TodoProps {
  text: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setTodos: React.Dispatch<string>;
}

const TodoForm: React.FunctionComponent<TodoProps> = ({
  text,
  onChangeInput,
  onSubmit,
  setTodos,
}) => {
  return (
    <>
      <form
        className="max-w-md mx-auto bg-slate-300 px-4 py-2 rounded-lg mb-4 mt-4"
        onSubmit={onSubmit}
      >
        <input
          className="w-full bg-slate-200 outline-none rounded-lg px-3 
          py-2 text-black focus:border-[3.4px] smooth focus:border-blue-500"
          type="text"
          autoFocus
          onChange={onChangeInput}
          value={text}
        />
        <div className="space-x-3 text-white">
          <button
            type="submit"
            className="bg-blue-500 px-3 py-2 rounded-lg mt-2"
          >
            Add Todo
          </button>
          <button
            onClick={() => setTodos([])}
            className="bg-red-700 px-3 py-2 rounded-lg mt-2"
          >
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
