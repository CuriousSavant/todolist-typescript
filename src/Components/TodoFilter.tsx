import React from 'react';

interface TodoFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="max-w-md mx-auto mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`px-2 py-1 rounded-lg text-white ${filter === 'all' ? 'bg-gray-700' : 'bg-gray-500'} mr-2`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-2 py-1 rounded-lg text-white ${filter === 'completed' ? 'bg-green-700' : 'bg-green-500'} mr-2`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('incompleted')}
        className={`px-2 py-1 rounded-lg text-white ${filter === 'incompleted' ? 'bg-yellow-700' : 'bg-yellow-500'} mr-2`}
      >
        Incompleted
      </button>
    </div>
  );
};

export default TodoFilter;
