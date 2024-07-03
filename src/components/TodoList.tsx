import React, { useState } from "react";
import { Todo } from "../modal";
import { MdDownloadDone } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import ConfirmModal from "./ConfirmModal";

interface Props {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  doneTodo: (id: string) => void;
  startEditing: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  doneTodo,
  startEditing,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);

  const openModal = (id: string) => {
    setSelectedTodoId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTodoId(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (selectedTodoId) {
      deleteTodo(selectedTodoId);
    }
    closeModal();
  };
  return (
    <div className="w-full px-4">
      <ul className="flex flex-col items-center justify-center">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between items-center w-full sm:w-[400px] h-[40px] border border-transparent mt-3 px-3 ${
              todo.isDone ? "bg-green-400" : "bg-pink-600"
            }`}
          >
            <span
              className={`text-sm sm:text-base ${
                todo.isDone ? "line-through" : ""
              }`}
            >
              {todo.todo}
            </span>
            <div className="flex space-x-3 sm:space-x-6">
              <MdDownloadDone
                className="cursor-pointer"
                onClick={() => doneTodo(todo.id)}
              />
              <RiDeleteBin6Fill
                className="cursor-pointer"
                onClick={() => openModal(todo.id)}
              />
              {!todo.isDone && (
                <AiFillEdit
                  className="cursor-pointer"
                  onClick={() => startEditing(todo)}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
      <ConfirmModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};
export default TodoList;
