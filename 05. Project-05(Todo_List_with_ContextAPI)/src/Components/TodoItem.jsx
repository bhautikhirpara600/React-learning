import { useState } from "react";
import { useTodo } from "../Contexts";

function TodoItem({ todoObj }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todoObj.todoMsg)

    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todoObj.id, {...todoObj, todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todoObj.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todoObj.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todoObj.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todoObj.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todoObj.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todoObj.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todoObj.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem