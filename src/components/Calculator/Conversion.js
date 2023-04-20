import React, { useEffect, useState } from 'react'
import CurrencyRow from './CurrencyRow'

const API_KEY = 'H6JuCTlxDYhwtIfzHVArKAArWqAGSyGz'

const Conversion = () => {
  // const [result, setResult] = useState('null')
  const [fromCurrency, setFromCurrency] = useState('EUR')
  const [toCurrency, setToCurrency] = useState('AZN')
  const [amountFrom, setAmountFrom] = useState(1)
  const [amountTo, setAmountTo] = useState(1.87)
  const [exchangeRate, setExchangeRate] = useState(1)

  useEffect(() => {
    fetch(`https://api.apilayer.com/fixer/convert?to=${toCurrency}&from=${fromCurrency}&amount=1&apikey=H6JuCTlxDYhwtIfzHVArKAArWqAGSyGz`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setExchangeRate(data.info.rate)
      })
    console.log('useEffect');
  }, [fromCurrency, toCurrency])

  const fromAmountHandler = (e) => {
    setAmountFrom(+(e.target.value))
    console.log(amountFrom);
    console.log(amountTo);
    setAmountTo(+(e.target.value) * exchangeRate)
    console.log(amountTo);
  }
  const toAmountHandler = (e) => {
    setAmountTo(+(e.target.value))
    setAmountTo(amountTo * exchangeRate)
  }
  // console.log(amountFrom);
  // console.log(amountTo);
  return (
    <div>
      <div className='flex mb-2 items-center'>
        <h2 className='text-2xl font-semibold'>Konvertasiya</h2>
      </div>
      <div className='flex'>
        <form>
          <CurrencyRow selectedCurrency={fromCurrency} changeCurrency={(e) => setFromCurrency(e.target.value)} amount={amountFrom} changeAmount={fromAmountHandler} />
          =
          <CurrencyRow selectedCurrency={toCurrency} changeCurrency={(e) => setToCurrency(e.target.value)} amount={amountTo} changeAmount={toAmountHandler} />
        </form>
      </div>
    </div>
  )
}

export default Conversion