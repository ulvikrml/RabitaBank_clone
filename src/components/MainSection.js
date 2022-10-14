import React from 'react';
import Links from './Links';
import Online from './Online';
import Calculator from './Calculator';

const MainSection = () => {
  return (
    <div className='main-section'>
        <Links></Links>
        <Online></Online>
        <Calculator></Calculator>
    </div>
  )
}

export default MainSection