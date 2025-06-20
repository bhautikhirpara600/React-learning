import { useEffect, useState } from "react"
import { TodoProvider } from "./Contexts"
import { TodoForm, TodoItem } from "./Components"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todoObj) => {
    setTodos(prev => [{id: Date.now(), ...todoObj} ,...prev])
  }

  const updateTodo = (id, todoObj) => {
    setTodos(prev => prev.map(prevTodo => (prevTodo.id === id ? todoObj : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(prevTodo => (prevTodo.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(prevTodo => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  useEffect(() => {
    const myTodos = JSON.parse(localStorage.getItem("myTodos"))

    if(myTodos && myTodos.length > 0) {
      setTodos(myTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map(prev => (
                <div key={prev.id} className="w-full">
                  <TodoItem todoObj={prev} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
