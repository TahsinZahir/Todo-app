import { useState } from "react";

function Todo({ finishTodo, editTodo, deleteTodo, text, isFinished }) {
  const [isEditting, setIsEditting] = useState(false);
  const [todoText, setTodoText] = useState(text);

  return (
    <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={isFinished}
        onChange={() => finishTodo(!isFinished)}
        className="h-5 w-5 text-blue-600 rounded"
        aria-label="Mark as finished"
      />

      {isEditting ? (
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Edit todo text"
        />
      ) : (
        <span className={isFinished ? "line-through text-gray-500" : ""}>
          {todoText}
        </span>
      )}

      <button
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5"
        onClick={() => {
          setIsEditting(!isEditting);
          if (isEditting) editTodo(todoText); 
        }}
        aria-label={isEditting ? "Save changes" : "Edit todo"}
      >
        {isEditting ? "Save" : "Edit"}
      </button>

      <button
        className="text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2"
        onClick={deleteTodo}
        aria-label="Delete todo"
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
