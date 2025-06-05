import InputBox from "./Component/InputBox"

function App() {

  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <section className="bg-[#ffffff1a] p-8 rounded-2xl flex flex-col items-center">
          <InputBox />
          <button className="bg-blue-600 z-10 m-[-10px] px-4 py-0.5 font-medium rounded-xl cursor-pointer text-white">swap</button>
          <InputBox />
          <button className="bg-blue-600 w-full mt-6 py-2 font-medium rounded-2xl cursor-pointer text-white">Convert</button>
        </section>
      </main>
    </>
  )
}

export default App
