import { useState } from 'react'
import  {Inputbox}  from './components/index.js'
import usecurrnecyinfo from './hooks/usecurrencyinfo.js'
import './App.css'

function App() {
  const [amount, SetAmount] = useState(0)
  const [from, Setfrom] = useState("USD")
  const [To, SetTo] = useState("INR")
  const [convertedAmount, SetconvertedAmount] = useState(0)

  const currencyinfo = usecurrnecyinfo(from)

  const options = Object.keys(currencyinfo)

  const swap = () => {
    Setfrom(To)
    SetTo(from)
    SetconvertedAmount(amount)
    SetAmount(convertedAmount)
  }

  const convert = () => {
    SetconvertedAmount(amount * currencyinfo[To])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountchange={(amount)=> SetAmount(amount)}
                onCurrencyChange={(currency) => Setfrom(amount)}
                selectCurrency={from}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5  "
                onClick={swap}

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => SetTo(currency)}
                selectCurrency={from}
                amounDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {To.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
