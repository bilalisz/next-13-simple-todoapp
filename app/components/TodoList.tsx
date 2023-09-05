"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Itasks } from "../types/todos.types";
import Scrollbars from "react-custom-scrollbars";
const Task = dynamic(() => import("./Task"), { ssr: false });

interface propsType {
  tasks: Itasks[];
}

const TodoList: React.FC<propsType> = ({ tasks }) => {
  return (
    <div className="my-3">
      <Scrollbars
        autoHide
        style={{ width: "100%", maxHeight: "75vh", height: "75vh" }}
      >
        <table className="table bg-slate-200 ">
          <thead>
            <tr>
              <th>Tasks</th>
              <th className="float-right mr-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-slate-100 ">
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </Scrollbars>
    </div>
  );
};

export default TodoList;
