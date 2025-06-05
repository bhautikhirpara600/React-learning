import { useState } from "react"
import { InputBox } from "./Component"
import { useCurrencyInfo } from "./hooks/useCurrencyInfo"

function App() {

  const [amount, setAmount] = useState("")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <section className="bg-[#ffffff1a] p-8 rounded-2xl flex flex-col items-center">
          <InputBox 
            label="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
            selectCurrency={from}
            amountDisable={false}
            currencyDisable={false}
          />
          <button onClick={swap} className="bg-blue-600  z-10 m-[-10px] px-4 pb-1 font-medium rounded-xl cursor-pointer text-white">
            swap
          </button>
          <InputBox 
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onAmountChange={(convertedAmount) => setAmount(convertedAmount)}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable={true}
            currencyDisable={false}
          />
          <button onClick={convert} className="bg-blue-600 w-full mt-6 py-2 font-medium rounded-2xl cursor-pointer text-white">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </section>
      </main>
    </>
  )
}

export default App
