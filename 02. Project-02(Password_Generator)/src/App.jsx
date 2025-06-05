import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLength] = useState(10)
  const [shouldNum, setShouldNum] = useState(false)
  const [shouldChar, setShouldChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerate = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = ""

    if(shouldNum) {
      str += "0123456789"
    }

    if(shouldChar) {
      str += "~!#$%^&*()_+"
    }

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)

  }, [length, shouldNum, shouldChar])

  const passRef = useRef(null)

  const copyToClipBoard = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password.slice(0,8))
  }, [password])

  useEffect(() => {
    passwordGenerate()
  }, [length, shouldNum, shouldChar])

  return (
    <>
      <h1 className="text-3xl text-center mt-4 font-medium">Password Generator</h1>
      <section className="flex flex-col">
        <div className="mt-4 flex items-center justify-center">
          <input type="text" defaultValue={password} ref={passRef} className="bg-white w-100 h-10 border-0 outline-0 rounded-s-3xl text-black px-4" />
          <button onClick={copyToClipBoard} className="bg-orange-500 w-20 h-10 border-0 outline-0 rounded-e-3xl font-medium cursor-pointer">Copy</button>
        </div>

        <div className="flex items-center justify-center space-x-2 mt-4">
          <input className="cursor-pointer" type="range" defaultValue={10} min={8} max={80} onChange={(e) => setLength(e.target.value)} />
          <label>Length: {length}</label>
          <div>
            <input className="cursor-pointer" type="checkbox" id="number" defaultChecked={shouldNum} onChange={() => setShouldNum((prev) => !prev)} />
            <label htmlFor="number" >Number</label>
          </div>
          <div>
            <input className="cursor-pointer" type="checkbox" id="character" defaultChecked={shouldChar} onChange={() => setShouldChar((prev) => !prev)} />
            <label htmlFor="character" >Character</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
