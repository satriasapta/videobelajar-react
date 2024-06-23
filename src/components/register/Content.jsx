import { useNavigate } from 'react-router-dom'
import eye from '../../assets/eye.png'
import google from '../../assets/google.png'
import indonesia from '../../assets/indonesia.png'

const Content = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full justify-center items-center flex sm:max-w-[50rem] sm:mx-auto">
            <div className='my-8 mx-6 bg-white w-full  justify-center items-center inline-block'>
                <div className="w-full inline-block">
                    <h2 className="text-2xl text-neutral-800 font-semibold font-poppins mt-8 text-center">Pendaftaran Akun</h2>
                    <p className='text-gray-400 text-sm font-normal text-center pt-1'>Yuk, daftarkan akunmu sekarang juga!</p>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className='font-dm-sans text-sm font-normal'>Nama Lengkap <span className='text-red-500'>*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input type="text" name="" id="" placeholder='Masukkan Nama Lengkap' className='w-full focus:outline-none' />
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className='font-dm-sans text-sm font-normal'>E-Mail <span className='text-red-500'>*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input type="email" name="" id="" placeholder='Masukkan Email' className='w-full focus:outline-none' />
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className='font-dm-sans text-sm font-normal'>No. Hp <span className='text-red-500'>*</span></p>
                    <div className="flex items-center gap-2 w-full">
                        <div className="inline-flex items-center bg-gray-400 border border-gray-300 rounded-lg">
                            <div className=" h-full w-10 flex justify-center">
                                <img src={indonesia} alt="ID Flag" className='w-6 h-6 items-center justify-center' />
                            </div>
                            <div className="h-full w-16">
                                <select name="" id="" className='bg-white focus:outline-none py-2 px-1 overflow-hidden w-full'>
                                    <option value="+62">+62</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                </select>

                            </div>
                        </div>
                        <div className='w-full'>
                            <input type="number" name="" id="" placeholder='Masukkan Nomor Hp' className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none' />
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className='font-dm-sans text-sm font-normal'>Kata Sandi <span className='text-red-500'>*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input type="password" name="" id="" placeholder='Masukkan Password' className='w-full focus:outline-none' />
                        <img src={eye} alt="" />
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className='font-dm-sans text-sm font-normal'>Konfirmasi Kata Sandi <span className='text-red-500'>*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input type="password" name="" id="" placeholder='Masukkan Password' className='w-full focus:outline-none' />
                        <img src={eye} alt="" />
                    </div>
                    <h4 className='text-end mt-4 text-gray-700'>Lupa Password?</h4>
                </div>

                <div className="w-full px-4 pt-4 sm:px-10 gap-6 block">
                    <button className='bg-green-500 text-white font-semibold font-dm-sans rounded-lg w-full py-2'>Daftar</button>
                    <button
                        onClick={() => navigate('/login')}
                        className='mt-4 bg-green-100 text-green-500 font-semibold font-dm-sans rounded-lg w-full py-2'>Masuk</button>
                    <div className="flex items-center justify-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">atau</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <button className='bg-white font-dm-sans rounded-lg w-full py-2 mb-8 border border-gray-300 items-center justify-center inline-flex'>
                        <img src={google} alt="" className='relative bottom-[1px]' />
                        <span className='px-2 text-gray-500 font-semibold'>Daftar dengan Google</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Content