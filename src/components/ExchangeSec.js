import React,{useState} from 'react'
import ExchangeRate from './ExchangeRate';
import Conversion from './Conversion';

const ExchangeSec = () => {
    const [activeExchangeRate ,setActiveExchangeRate] = useState(false)
    const current = new Date();
    const currentDate = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`;
  return (
    <div>
        {activeExchangeRate ? <ExchangeRate/> : <Conversion/> }
            <div className='flex'>
                <p>Kurs {currentDate} tarixinə qədər aktivdir.</p>
                <button className='border p-2 bg-gray-300' onClick={()=>setActiveExchangeRate(prevState=>!prevState)}>{activeExchangeRate ? "Konvertasiya et" : "Məzənnəyə qayıt"}</button>
            </div>
        </div>
  )
}

export default ExchangeSec