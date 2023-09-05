import { Itasks } from "./types/todos.types";

const baseUrl = process.env.REACT_APP_BASE_URL

export const getTodos = async (): Promise<Itasks[]> => {

    const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
    const data = await res.json()
    return data

}

export const addTodo = async (todo: Itasks): Promise<Itasks> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: "POST",
        headers: { "content-type": "Application/json" },
        body: JSON.stringify(todo),
    });
    const data = await res.json();
    return data
};

export const updateTodo = async (todo: Itasks): Promise<Itasks> => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: "PUT",
        headers: { "content-type": "Application/json" },
        body: JSON.stringify(todo),
    });
    const data = await res.json()
    return data
};

export const deleteTodo = async (id: string): Promise<Itasks> => {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {
        method: "DELETE",

    });
    const data = await res.json();
    return data
};





