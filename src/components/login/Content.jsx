import { useNavigate } from 'react-router-dom'
import eye from '../../assets/eye.png'
import google from '../../assets/google.png'
import navbar from './Navbar'

const Content = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full justify-center items-center flex sm:max-w-[50rem] sm:mx-auto">
            <div className='my-8 mx-6 bg-white w-full  justify-center items-center inline-block'>
                <div className="w-full inline-block">
                    <h2 className="text-2xl text-neutral-800 font-semibold font-poppins mt-8 text-center">Masuk ke Akun</h2>
                    <p className='text-gray-400 text-sm font-normal text-center pt-1'>Yuk, lanjutin belajarmu di videobelajar.</p>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className='font-dm-sans text-sm font-normal'>E-Mail <span className='text-red-500'>*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input type="email" name="" id="" placeholder='Masukkan Email' className='w-full' />
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className='font-dm-sans text-sm font-normal'>Kata Sandi <span className='text-red-500'>*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input type="password" name="" id="" placeholder='Masukkan Password' className='w-full' />
                        <img src={eye} alt="" />
                    </div>
                    <h4 className='text-end mt-4 text-gray-700'>Lupa Password?</h4>
                </div>

                <div className="w-full px-4 pt-4 sm:px-10 gap-6 block">
                    <button
                        onClick={() =>
                            navigate('/')
                        }
                        className='bg-green-500 text-white font-semibold font-dm-sans rounded-lg w-full py-2'>Masuk</button>
                    <button
                        onClick={() =>
                            navigate('/register')
                        }
                        className='mt-4 bg-green-100 text-green-500 font-semibold font-dm-sans rounded-lg w-full py-2'>Daftar</button>
                    <div className="flex items-center justify-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">atau</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <button className='bg-white font-dm-sans rounded-lg w-full py-2 mb-8 border border-gray-300 items-center justify-center inline-flex'>
                        <img src={google} alt="" className='relative bottom-[1px]' />
                        <span className='px-2 text-gray-500 font-semibold'>Masuk dengan Google</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Content