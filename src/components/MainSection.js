import React from 'react';
import Links from './Links';
import Online from './Online';
import Calculator from './Calculator/Calculator';
import Banner from './Banner'
import Footer from './Footer/Footer';

const MainSection = () => {
  return (
    <div className='main-section'>
        <Links></Links>
        <Online></Online>
        <Calculator></Calculator>
        <Banner></Banner>
        <Footer></Footer>
    </div>
  )
}

export default MainSection