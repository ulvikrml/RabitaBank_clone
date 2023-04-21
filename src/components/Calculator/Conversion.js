import React, { useEffect, useState } from 'react'
import CurrencyRow from './CurrencyRow'

const Conversion = () => {
  // const [result, setResult] = useState('null')
  const [fromCurrency, setFromCurrency] = useState('EUR')
  const [toCurrency, setToCurrency] = useState('AZN')
  const [amountFrom, setAmountFrom] = useState(1)
  const [amountTo, setAmountTo] = useState(1.87)
  const [exchangeRate, setExchangeRate] = useState(1)

  useEffect(() => {
    const fetchHandler = () =>{
      fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}}&symbols=${toCurrency}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.rates[toCurrency]);
        setExchangeRate(data.rates[toCurrency])
      })
    }
    fetchHandler()
      console.log('useEffect');
      // console.log(exchangeRate);
      // console.log(fromCurrency);
  }, [fromCurrency, toCurrency])

  const fromAmountHandler = (e) => {
    let value = +(e.target.value)
    setAmountFrom(value)
    setAmountTo((value * exchangeRate).toFixed(2))
  }
  const toAmountHandler = (e) => {
    let value = +(e.target.value)
    setAmountTo(value)
    setAmountFrom((value / exchangeRate).toFixed(2))
  }
  const fromCurrencyHandler = (e) =>{
    setFromCurrency(e.target.value)
    setAmountTo((amountFrom / exchangeRate).toFixed(2))
  }
  console.log(fromCurrency);
  console.log(toCurrency);
  return (
    <div>
      <div className='flex mb-2 items-center'>
        <h2 className='text-2xl font-semibold'>Konvertasiya</h2>
      </div>
      <div className='flex'>
        <form>
          <CurrencyRow selectedCurrency={fromCurrency} changeCurrency={(e) => fromCurrencyHandler(e)} amount={amountFrom} changeAmount={fromAmountHandler} />
          =
          <CurrencyRow selectedCurrency={toCurrency} changeCurrency={(e) => setToCurrency(e.target.value)} amount={amountTo} changeAmount={toAmountHandler} />
        </form>
      </div>
    </div>
  )
}

export default Conversion