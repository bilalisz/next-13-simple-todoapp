"use client";
import React, { useState } from "react";
import { Itasks } from "../types/todos.types";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { deleteTodo, updateTodo } from "../api";
import { useRouter } from "next/navigation";
import TaskModal from "./Task.Modal";

interface propsType {
  task: Itasks;
}

const Task: React.FC<propsType> = ({ task }) => {
  const [modalDelOpen, setModalDelOpen] = useState<boolean>(false);
  const [apiLoading, setApiLoading] = useState<boolean>(false);
  const [updateModalOpen, setUpateModalOpen] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>(task.text);
  const router = useRouter();

  const handleDelTask = async () => {
    setApiLoading(true);
    const data = await deleteTodo(task.id);
    if (data) {
      setModalDelOpen(false);
      router.refresh();
      setApiLoading(false);
    }
  };
  const handleUpdateTask = async () => {
    setApiLoading(true);
    const data = await updateTodo({ id: task.id, text: newValue });
    if (data) {
      setUpateModalOpen(false);
      router.refresh();
      setApiLoading(false);
    }
  };

  return (
    <tr className="hover:bg-slate-200 cursor-pointer">
      <td className="w-full">{task.text}</td>
      <td className="flex gap-4 ">
        <FiEdit
          cursor="pointer"
          size={18}
          className="text-blue-500 hover:text-blue-700 active:text-blue-400"
          onClick={() => setUpateModalOpen(true)}
        />
        <FiTrash2
          onClick={() => setModalDelOpen(true)}
          cursor="pointer"
          size={18}
          className="text-red-500 hover:text-red-700 active:text-red-400"
        />
      </td>
      <Modal modalOpen={modalDelOpen} setModalOpen={setModalDelOpen}>
        <div>
          <h3 className="font-bold text-lg">Delete Task</h3>
          <div>
            <p className="py-4 flex">
              Are you sure to{" "}
              <FiTrash2 size={18} className="text-red-500 mx-1" /> this task?
            </p>
          </div>
        </div>
        <div className="modal-action gap-2">
          <button
            className="btn bg-slate-100 font-light"
            onClick={() => setModalDelOpen(false)}
          >
            Cancel
          </button>
          <button
            className="btn bg-red-400 font-light text-white"
            onClick={handleDelTask}
            disabled={apiLoading}
          >
            <span
              className={`${apiLoading ? "loading loading-spinner" : ""}`}
            ></span>
            Delete
          </button>
        </div>
      </Modal>
      <TaskModal
        modalOpen={updateModalOpen}
        setModalOpen={setUpateModalOpen}
        onChange={(value) => setNewValue(value)}
        value={newValue}
        onSubmit={handleUpdateTask}
        loading={apiLoading}
      />
    </tr>
  );
};

export default Task;
