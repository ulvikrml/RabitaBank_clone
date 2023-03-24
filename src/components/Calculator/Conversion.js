import React, { useRef } from 'react'

const Conversion = () => {
  // const [amount1, setAmount1] = useState('');
  // const [amount2, setAmount2] = useState('');

  const firstInput = useRef();
  const secInput = useRef();
  // console.log(secInput);
  const formHandler = () => {
    console.log('testing');
    console.log(firstInput.current.value);
    secInput.current.value = firstInput.current.value * 10;

  }
  return (
    <div>
      <div className='flex mb-2 items-center'>
        <h2 className='text-2xl font-semibold'>Konvertasiya</h2>
      </div>
      <div className='flex'>
        <form onChange={formHandler}>
          <div className="current-box flex">
            <input className='border' type="text" ref={firstInput} value='1' />
            <select name="" id="">
              <option value="AZN">AZN</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="current-box flex">
            <input readOnly className='border' type="text" ref={secInput} value='1' />
            <select name="" id="">
              <option value="AZN">AZN</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Conversion