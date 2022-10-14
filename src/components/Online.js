import React from 'react'

const Online = () => {
  return (
    <section className='online w-[1050px] mx-auto flex items-center mt-[120px] justify-between'>
        <div className='w-2/5 flex flex-col'>
            <h2 className='text-4xl font-bold'>Rabita Mobile</h2>
            <p className='text-lg font-light my-9'>Hər yerdə maliyyə xidmətlərimizdən faydalanmaq üçün Rabita Mobile istifadə edin!</p>
            <div className="scan-container flex items-center">
                <img className='w-2/5' src={require('../assets/images/online_section/qr_mobile.jpg')} alt="qr_mobile" />
                <p className='text-base ml-6 w-3/5'>Telefonunuzun kamerası ilə QR codu scan edin</p>
            </div>
        </div>
        <div className='w-1/2 h-full'>
            <img className='' src={require('../assets/images/online_section/mobile.png')} alt="qr_mobile" />
        </div>
    </section>
  )
}

export default Online