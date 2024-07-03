import React, { useState, useEffect } from "react";

interface Props {
  handleAdd: (todo: { id: string; todo: string; isDone: boolean }) => void;
  editingTodo: { id: string; todo: string; isDone: boolean } | null;
  editTodo: (id: string, newTask: string) => void;
}

const InputField: React.FC<Props> = ({ handleAdd, editingTodo, editTodo }) => {
  const [todo, setTodo] = useState<string>("");

  useEffect(() => {
    if (editingTodo) {
      setTodo(editingTodo.todo);
    }
  }, [editingTodo]);

  const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingTodo) {
      editTodo(editingTodo.id, todo);
    } else {
      const task = { id: Math.random().toString(), todo, isDone: false };
      handleAdd(task);
    }
    setTodo("");
  };

  return (
    <div>
      <form
        className="flex justify-center items-center relative w-[90%]"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Enter a task"
          className="sm:w-[90%] w-[80%] rounded-full sm:px-[30px] sm:py-[20px] px-[10px] py-[10px] text-[25px] border-none shadow-lg transition duration-150"
          value={todo}
          onChange={inputChangeHandle}
        />
        <button
          className="absolute right-0 w-[50px] h-[50px] rounded-full bg-emerald-600 text-white text-[15px] font-bold shadow-lg hover:bg-blue-600 transform active:scale-90 sm:mr-6 mr-10"
          type="submit"
        >
          {editingTodo ? "Update" : "Go"}
        </button>
      </form>
    </div>
  );
};

export default InputField;
