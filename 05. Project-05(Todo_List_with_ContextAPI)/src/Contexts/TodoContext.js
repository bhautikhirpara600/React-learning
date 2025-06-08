import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todoObj) => {},
    updateTodo: (id, todoObj) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
