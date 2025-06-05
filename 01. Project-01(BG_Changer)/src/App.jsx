import { useState } from "react"

function App() {

  const [color, setColor] = useState("#717171")

  return (
    <>
      <main className="w-full h-screen flex items-center justify-start flex-col" style={{backgroundColor: color}}>
        <h1 className="text-4xl font-bold mt-4">BG Changer</h1>
        <div className="w-[58%] h-25 bg-[#cabfbf] absolute bottom-10 rounded-4xl flex items-center justify-center space-x-4">
          <button className="bg-red-500 px-6 py-2 rounded-3xl text-xl cursor-pointer" onClick={() => setColor("red")}>Red</button>
          <button className="bg-orange-500 px-6 py-2 rounded-3xl text-xl cursor-pointer" onClick={() => setColor("orange")}>Orange</button>
          <button className="bg-yellow-500 px-6 py-2 rounded-3xl text-xl cursor-pointer" onClick={() => setColor("yellow")}>Yellow</button>
          <button className="bg-green-500 px-6 py-2 rounded-3xl text-xl cursor-pointer" onClick={() => setColor("green")}>Green</button>
          <button className="bg-blue-500 px-6 py-2 rounded-3xl text-xl cursor-pointer" onClick={() => setColor("blue")}>Blue</button>
          <button className="bg-indigo-500 px-6 py-2 rounded-3xl text-xl cursor-pointer" onClick={() => setColor("indigo")}>Indigo</button>
          <button className="bg-violet-500 px-6 py-2 rounded-3xl text-xl cursor-pointer" onClick={() => setColor("violet")}>Violet</button>
        </div>
      </main>
    </>
  )
}

export default App
