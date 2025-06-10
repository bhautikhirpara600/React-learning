import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch() 

    return (
        <>  <ul>
            {
                todos.map(todo => (

                    <li key={todo.id} className="bg-purple-300 w-[57%] mx-auto mt-4 px-4 p-2 flex items-center justify-between">
                        {todo.text}
                        <div className="space-x-2">
                            <button onClick={() => dispatch(removeTodo(todo.id))} className="bg-pink-400 px-2 cursor-pointer">Delete</button>
                        </div>
                    </li>

                ))
            }
        </ul>
        </>
    )
}

export default Todos