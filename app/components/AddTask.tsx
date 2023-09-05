"use client";

import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { addTodo } from "../api";
import { getId } from "@/utils";
import { useRouter } from "next/navigation";
import TaskModal from "./Task.Modal";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");
  const [isClient, setIsClient] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSumbitTask = async () => {
    setLoading(true);
    await addTodo({ id: getId(), text: newTask });
    setNewTask("");
    setModalOpen(false);
    router.refresh();
    setLoading(false);
  };

  return (
    <>
      {isClient ? (
        <>
          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-primary w-full"
          >
            Add New Task <AiOutlinePlus />
          </button>
          <TaskModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            onChange={(value) => setNewTask(value)}
            value={newTask}
            onSubmit={handleSumbitTask}
            loading={loading}
          />
        </>
      ) : (
        <div className="h-12 bg-gray-300 rounded-xl dark:bg-gray-600 w-full"></div>
      )}
    </>
  );
};

export default AddTask;
