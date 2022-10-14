import React, {useRef} from 'react'

const Conversion = () => {
  const firstInput = useRef();
  const secInput = useRef();
  console.log(secInput);
const formHandler = () =>{
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
            <input className='border' type="text" ref={firstInput}/>
            <p className="current">Azn</p>
          </div>
          <div className="current-box flex">
            <input readOnly className='border' type="text" ref={secInput}/>
            <p className="current">Eur</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Conversion