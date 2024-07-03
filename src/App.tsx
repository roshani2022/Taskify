import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./modal";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleAdd = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleDelete = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const doneTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const editTodo = (id: string, newTask: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todo: newTask } : todo
      )
    );
    setEditingTodo(null);
  };

  const startEditing = (todo: Todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className="font-nucha w-[100vw] h-[100vh] flex flex-col items-center bg-emerald-600">
      <span className="uppercase md:text-[40px] md:my-[30px] md:mx-0 text-[40px] mx-0 my-[30px] text-white text-center z-[1]">
        Taskify
      </span>
      <InputField
        handleAdd={handleAdd}
        editingTodo={editingTodo}
        editTodo={editTodo}
      />
      <TodoList
        todos={todos}
        deleteTodo={handleDelete}
        doneTodo={doneTodo}
        startEditing={startEditing}
      />
    </div>
  );
};

export default App;
