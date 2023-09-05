import dynamic from "next/dynamic";
import { getTodos } from "./api";
import AddTask from "./components/AddTask";
import { GoAlert } from "react-icons/go";

const TodoList = dynamic(() => import("./components/TodoList"), { ssr: false });

export default async function Home() {
  const todoData = await getTodos();

  return (
    <main className="max-w-3xl mt-4 mx-auto max-h-100">
      <div className="text-center my-3 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Todo List App</h1>
        <AddTask />
      </div>
      {todoData.length ? (
        <TodoList tasks={todoData} />
      ) : (
        <div className="flex justify-center items-center flex-col">
          <GoAlert size={120} color="gray" />
          <h3 className="text-gray-400 text-xl" style={{ fontSize: 30 }}>
            No data found!
          </h3>
        </div>
      )}
    </main>
  );
}
