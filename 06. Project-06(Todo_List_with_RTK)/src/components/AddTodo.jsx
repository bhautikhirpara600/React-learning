import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <>
            <h1 className="bg-gray-300 text-3xl text-center font-medium">Todo with Redux Toolkit</h1>
            <form onSubmit={addTodoHandler} className="flex items-center justify-center gap-x-2 mt-4">
                <input type="text" 
                    placeholder="Enter a Todo..." 
                    className="bg-amber-100 p-2 w-[50%] border-0 outline-0"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="bg-purple-300 p-2 cursor-pointer">Add Todo</button>
            </form>
        </>
    )
}

export default AddTodo