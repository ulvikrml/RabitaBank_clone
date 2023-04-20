import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'

const Header = () => {
  return (
    <section className='container mx-auto px-8'>
      <Swiper
        slidesPerView={1}
        className='flex flex-row items-center mySwiper w-[1000px]'
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide'
        }}
        pagination={{
          clickable: true
        }}
        loop={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className='flex justify-between w-full items-center h-full'>
            <div className='w-full'>
              <h2 className='text-2xl'>Nağd pul krediti</h2>
              <p>Bütün ehtiyaclar üçün nağd pul krediti</p>
              <ul className="flex">
                <li className='flex flex-col mr-5'><span>Məbləğ</span>30 000 AZN</li>
                <li className='flex flex-col mr-5'><span>Faiz dərəcəsi</span>12%-dən</li>
                <li className='flex flex-col mr-5'><span>Müddət</span>48 aya qədər</li>
              </ul>
              <button className='bg-[#75A64D] p-2 text-white rounded-md text-sm'>Sifariş et</button>
            </div>
            <img className='w-[350px] h-auto' src={require('../../assets/images/slider/slider1.webp')} alt="Sliderimg1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>  
          <div className='flex justify-between w-full items-center'>
            <div className='w-full'>
              <h2 className='text-2xl'>Kartmane Kredit kartı</h2>
              <ul className="flex">
                <li className='flex flex-col mr-5'><span>Nağdlaşdırma</span>100%</li>
                <li className='flex flex-col mr-5'><span>Güzəşt müddəti</span>100 gün</li>
                <li className='flex flex-col mr-5'><span>Kart limiti</span>200 - 15 000 AZN</li>
              </ul>
              <button className='bg-[#75A64D] p-2 text-white rounded-md text-sm'>Sifariş et</button>
            </div>
            <img className='w-[300px] h-auto' src={require('../../assets/images/slider/slider2.webp')} alt="Sliderimg1" />
          </div>
        </SwiperSlide>

      </Swiper>
        <div className="button-prev-slide w-[50px] h-[50px] absolute top-[25%] left-[70px] z-50 bg-[#F1F4EE] hover:bg-white rounded-full cursor-pointer transition-all">
          <IoIosArrowBack className='left-2/4 top-2/4 absolute translate-y-[-50%] translate-x-[-50%] text-xl' />
        </div>
        <div className="button-next-slide w-[50px] h-[50px] absolute top-[25%] right-[70px] z-50 bg-[#F1F4EE] hover:bg-white rounded-full cursor-pointer transition-all duration-150">
          <IoIosArrowForward className='left-2/4 top-2/4 absolute translate-y-[-50%] translate-x-[-50%] text-xl' />
        </div>
    </section>
  )
}

export default Header