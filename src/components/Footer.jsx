import logo from '../assets/logo.png'
import right from '../assets/right.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
const Footer = () => {
    return (
        <div className="w-full bg-white pt-2 px-4 sm:p-8">
            <div className='sm:inline-flex sm:justify-between sm: w-full'>
                <div className="sm:inline-block">
                    <img src={logo} alt="" />
                    <h2 className='text-l font-poppins font-bold mt-2 sm: mt-8'>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h2>
                    <p className='text-sm font-light text-gray-600 font-dm-sans pt-2 '>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    <p className='text-sm font-light text-gray-600 font-dm-sans pt-2'>+62-877-7123-1234</p>
                </div>
                <div className='w-auto sm:inline-flex sm:gap-4 md:gap-8 lg:gap-12'>
                    <div className="w-full inline-flex justify-between mt-4 sm:inline-block sm:mt-0 mb-3 ">
                        <h2 className='text-md font-bold font-dm-sans sm:mb-2 md:w-36'> Kategori</h2>
                        <img className='sm:hidden' src={right} alt="" />
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Digital & Teknologi</p>
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Pemasaran</p>
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Manajemen Bisnis</p>
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Desain</p>
                    </div>

                    <div className="w-full inline-flex justify-between mt-4 sm:inline-block sm:mt-0 mb-3">
                        <h2 className='text-md font-bold font-dm-sans sm:mb-2 md:w-36'> Perusahaan</h2>
                        <img className='sm:hidden' src={right} alt="" />
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Tentang Kami</p>
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>FAQ</p>
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Kebijakan Privasi</p>
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Ketentuan Layanan</p>
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Bantuan</p>
                    </div>
                    <div className="w-full inline-flex justify-between mt-4 sm:inline-block sm:mt-0 mb-3">
                        <h2 className='text-md font-bold font-dm-sans sm:mb-2 md:w-36'> Komunitas</h2>
                        <img className='sm:hidden' src={right} alt="" />
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Tips Sukses</p>
                        <p className='hidden sm:block text-gray-500 font-dm-sans py-1'>Blog</p>
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