import React from 'react'

const FooterMenu = () => {
    return (
        <div class="flex flex-row justify-between flex-wrap">
            <div class="w-[16.6%]">
                <p class="footer-title">Fərdi müştərilər</p>
                <ul>
                    <li><a className='footer-link' href="/">Kartmane</a></li>
                    <li><a className='footer-link' href="/">Kreditlər</a></li>
                    <li><a className='footer-link' href="/">Əmanətlər</a></li>
                    <li><a className='footer-link' href="/">Onlayn xidmətlər</a></li>
                    <li><a className='footer-link' href="/">Kampaniyalar</a></li>
                </ul>
            </div>
            <div class="w-[16.6%]">
                <p class="footer-title">Biznes müştərilər</p>
                <ul>
                    <li><a className='footer-link' href="/">Əmanətlər</a></li>
                    <li><a className='footer-link' href="/">Kreditlər</a></li>
                    <li><a className='footer-link' href="/">Plastik kartlar</a></li>
                    <li><a className='footer-link' href="/">Bank xidmətləri</a></li>
                    <li><a className='footer-link' href="/">Kampaniyalar</a></li>
                </ul>
            </div>
            <div class="w-[16.6%]">
                <p class="footer-title">Bank haqqında</p>
                <ul>
                    <li><a className='footer-link' href="/">Ümumi məlumat</a></li>
                    <li><a className='footer-link' href="/">Strateji baxış və missiya</a></li>
                    <li><a className='footer-link' href="/">Rəhbərlik</a></li>
                    <li><a className='footer-link' href="/">Banklararası biznes</a></li>
                    <li><a className='footer-link' href="/">Risklərin idarə edilməsi</a></li>
                </ul>
            </div>
            <div class="w-[16.6%]">
                <p class="footer-title">Digər</p>
                <ul>
                    <li><a className='footer-link' href="/">Yükləmələr və dəstək</a></li>
                    <li><a className='footer-link' href="/">Tender elanları</a></li>
                    <li><a className='footer-link' href="/">Hesabatlar</a></li>
                    <li><a className='footer-link' href="/">Şikayət və təkliflər</a></li>
                    <li><a className='footer-link' href="/">F.A.Q</a></li>
                </ul>
            </div>
            <div class="w-[16.6%]">
                <p class="footer-title">İnsan resursları</p>
                <ul>
                    <li><a className='footer-link' href="/">Ümumi məlumat</a></li>
                    <li><a className='footer-link' href="/">Vakansiyalar</a></li>
                </ul>
            </div>
            <div class="w-[16.6%]">
                <p class="footer-title">Baş ofis</p>
                <ul className='flex flex-col'>
                    <li className='footer-title mb-1'><a href="/">Azərbaycan, Bakı şəh., AZ 1010, 28 May küç. 33</a></li>
                    <li className='footer-title mb-1'>Tel.: <a href="/">(994 12) 598 44 88</a></li>
                    <li className='footer-title mb-1'>Fax.: <a href="/">(994 12) 598 44 88</a></li>
                    <li className='footer-title mb-1'>Teleks: <a href="/">142453 RSKBAI</a></li>
                    <li className='footer-title mb-1'><a href="/">133@rabitabank.com</a></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterMenu