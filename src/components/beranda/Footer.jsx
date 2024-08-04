import logo from '../../assets/logo.png'
import right from '../../assets/right.png'
import down from '../../assets/down.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import { useState } from 'react'
const Footer = () => {
    const [showKategori, setShowKategori] = useState(false)
    const [showPerusahaan, setShowPerusahaan] = useState(false)
    const [showKomunitas, setShowKomunitas] = useState(false)

    return (
        <div className="w-full bg-white pt-2 px-4 sm:p-8">
            <div className='sm:inline-flex sm:justify-between sm: w-full'>
                <div className="sm:inline-block">
                    <img src={logo} alt="" />
                    <h2 className='text-l font-poppins font-bold mt-4'>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h2>
                    <p className='text-sm font-light text-gray-600 font-dm-sans pt-2 '>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    <p className='text-sm font-light text-gray-600 font-dm-sans pt-2'>+62-877-7123-1234</p>
                </div>
                <div className='w-auto sm:flex sm:justify-between sm:gap-4 md:gap-8 lg:gap-12'>
                    <div className="w-full flex flex-col sm:flex-col justify-start mt-4 sm:mt-0 mb-3">
                        <div className=" flex justify-between items-center">
                            <h2 className='w-40 text-md font-bold font-dm-sans sm:mb-2'>Kategori</h2>
                            <img
                                className='sm:hidden cursor-pointer'
                                src={showKategori ? down : right}
                                alt=""
                                onClick={() => setShowKategori(!showKategori)}
                            />
                        </div>
                        <div className={`flex flex-col ${showKategori ? 'block' : 'hidden'} sm:block`}>
                            <p className='text-gray-500 font-dm-sans py-1'>Digital & Teknologi</p>
                            <p className='text-gray-500 font-dm-sans py-1'>Pemasaran</p>
                            <p className='text-gray-500 font-dm-sans py-1'>Manajemen Bisnis</p>
                            <p className='text-gray-500 font-dm-sans py-1'>Desain</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col sm:flex-col justify-start mt-4 sm:mt-0 mb-3">
                        <div className="flex justify-between items-center">
                            <h2 className='w-40 text-md font-bold font-dm-sans sm:mb-2'>Perusahaan</h2>
                            <img
                                className='sm:hidden cursor-pointer'
                                src={showPerusahaan ? down : right}
                                alt=""
                                onClick={() => setShowPerusahaan(!showPerusahaan)}
                            />
                        </div>
                        <div className={`flex flex-col ${showPerusahaan ? 'block' : 'hidden'} sm:block`}>
                            <p className='text-gray-500 font-dm-sans py-1'>Tentang Kami</p>
                            <p className='text-gray-500 font-dm-sans py-1'>FAQ</p>
                            <p className='text-gray-500 font-dm-sans py-1'>Kebijakan Privasi</p>
                            <p className='text-gray-500 font-dm-sans py-1'>Ketentuan Layanan</p>
                            <p className='text-gray-500 font-dm-sans py-1'>Bantuan</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col sm:flex-col justify-start mt-4 sm:mt-0 mb-3">
                        <div className="flex justify-between items-center">
                            <h2 className='w-40 text-md font-bold font-dm-sans sm:mb-2'>Komunitas</h2>
                            <img
                                className='sm:hidden cursor-pointer'
                                src={showKomunitas ? down : right}
                                alt=""
                                onClick={() => setShowKomunitas(!showKomunitas)}
                            />
                        </div>
                        <div className={`flex flex-col ${showKomunitas ? 'block' : 'hidden'} sm:block`}>
                            <p className='text-gray-500 font-dm-sans py-1'>Tips Sukses</p>
                            <p className='text-gray-500 font-dm-sans py-1'>Blog</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-t-1 my-8 border-gray-300 w-full" />
            <div className="w-full sm:flex justify-between items-center">

                <div className="inline-flex gap-2 order-1 sm:order-2">
                    <img src={instagram} alt="Instagram" />
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                    <img src={linkedin} alt="LinkedIn" />
                </div>
                <p className="text-md font-medium text-gray-500 font-dm-sans tracking-wide ">
                    @2023 Gerobak Sayur All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer