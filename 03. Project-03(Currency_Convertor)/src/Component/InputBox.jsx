import { useCurrencyInfo } from "../hooks/useCurrencyInfo"

function InputBox() {
    const currencyInfo = useCurrencyInfo("inr")
    
    return (
        <>
            <div className="w-96 flex items-center justify-between bg-amber-50 p-4 rounded-2xl">
                <div className="flex flex-col">
                    <label htmlFor="">From</label>
                    <input value={0} readOnly type="number" className="mt-6 outline-0 cursor-pointer" />
                </div>
                <div className="flex flex-col items-end">
                    <p>Currency Type</p>
                    <select className="mt-6 w-[60%] outline-0 cursor-pointer">
                        <option value="usd">usd</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox