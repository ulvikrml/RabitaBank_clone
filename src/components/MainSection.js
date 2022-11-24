import React from 'react';
import Links from './Links';
import Online from './Online';
import Calculator from './Calculator';
import Banner from './Banner'

const MainSection = () => {
  return (
    <div className='main-section'>
        <Links></Links>
        <Online></Online>
        <Calculator></Calculator>
        <Banner></Banner>
    </div>
  )
}

export default MainSection