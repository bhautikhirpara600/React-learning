import { useId } from "react"

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
}) {

    const amountInputId = useId()

    return (
        <>
            <div className="w-96 flex items-center justify-between bg-amber-50 p-4 rounded-2xl">
                <div className="flex flex-col">
                    <label htmlFor={amountInputId} className="text-gray-400"> {label} </label>
                    <input
                        id={amountInputId}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        disabled={amountDisable}
                        type="number"
                        className="mt-6 outline-0 bg-gray-100 cursor-pointer"
                        placeholder="Amount"
                    />
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-gray-400">Currency Type</p>
                    <select
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                        className="mt-6 w-[60%] outline-0 bg-gray-100 cursor-pointer">
                            {
                                currencyOptions.map((curr) => (
                                    <option key={curr} value={curr}> {curr.toUpperCase()} </option>
                                ))
                            }
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox