import content1 from '../assets/c1.png'
import content2 from '../assets/c2.png'
import content3 from '../assets/c3.png'
import content4 from '../assets/c4.png'
import content5 from '../assets/c5.png'
import content6 from '../assets/c6.png'
import content7 from '../assets/c7.png'
import content8 from '../assets/c8.png'
import content0 from '../assets/c0.png'
import avatar1 from '../assets/a1.png'
import avatar2 from '../assets/a2.png'
import avatar3 from '../assets/a3.png'
import avatar4 from '../assets/a4.png'
import avatar5 from '../assets/a5.png'
import starfull from '../assets/starfull.png'
import starhalf from '../assets/starhalf.png'
import star from '../assets/star.png'
import promosi from '../assets/promosi.jpeg'
const Content = () => {
    return (
        <div className='px-5 sm:px-16 sm:py:12'>

            <div className="menu">
                <div className="flex-col justify-center items-start inline-flex">
                    <div className="pr-9 py-3 justify-start items-center gap-1.5 inline-flex">
                        <div className="text-orange-600 text-sm font-medium font-dm-sans leading-tight tracking-tight">Semua Kelas</div>
                    </div>
                    <div className="w-[52px] h-1.5 bg-orange-600 rounded-xl" />
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                    <div className="pr-9 py-3 justify-start items-center gap-1.5 inline-flex">
                        <div className="text-zinc-400 text-sm font-medium font-dm-sans leading-tight tracking-tight">Pemasaran</div>
                    </div>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                    <div className="pr-9 py-3 justify-start items-center gap-1.5 inline-flex">
                        <div className="text-zinc-400 text-sm font-medium font-dm-sans leading-tight tracking-tight">Desain</div>
                    </div>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                    <div className="pr-9 py-3 justify-start items-center gap-1.5 inline-flex">
                        <div className="text-zinc-400 text-sm font-medium font-dm-sans leading-tight tracking-tight">Pengembangan Diri</div>
                    </div>
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                </div>
                <div className="flex-col justify-center items-start inline-flex">
                    <div className="pr-9 py-3 justify-start items-center gap-1.5 inline-flex">
                        <div className="text-zinc-400 text-sm font-medium font-dm-sans leading-tight tracking-tight">Bisnis</div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="w-full p-4 bg-white rounded-[10px] border border-zinc-200 flex-col items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <img src={content1} alt="" />
                        <div className='flex-col justify-start items-start gap-2 inline-flex'>
                            <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">Big 4 Auditor Financial Analyst</h5>
                            </div>
                            <div className='justify-start items-start gap-2 inline-flex'>
                                <img src={avatar1} alt="" />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">Jenna Ortega</p>
                                    <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1"> Senior Accountant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className=" items-center inline-flex">

                            <img src={starfull} alt="" />
                            <img src={starfull} alt="" />
                            <img src={starhalf} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2"> 3.5 (86)</p>
                        </div>
                        <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">Rp 300K</p>
                    </div>
                </div>
                <div className="w-full p-4 bg-white rounded-[10px] border border-zinc-200 flex-col items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <img src={content2} alt="" />
                        <div className='flex-col justify-start items-start gap-2 inline-flex'>
                            <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">Big 4 Auditor Financial Analyst</h5>
                            </div>
                            <div className='justify-start items-start gap-2 inline-flex'>
                                <img src={avatar2} alt="" />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">Jenna Ortega</p>
                                    <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1"> Senior Accountant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className=" items-center inline-flex">

                            <img src={starfull} alt="" />
                            <img src={starfull} alt="" />
                            <img src={starhalf} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2"> 3.5 (86)</p>
                        </div>
                        <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">Rp 300K</p>
                    </div>
                </div>
                <div className="w-full p-4 bg-white rounded-[10px] border border-zinc-200 flex-col items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <img src={content3} alt="" />
                        <div className='flex-col justify-start items-start gap-2 inline-flex'>
                            <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">Big 4 Auditor Financial Analyst</h5>
                            </div>
                            <div className='justify-start items-start gap-2 inline-flex'>
                                <img src={avatar3} alt="" />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">Jenna Ortega</p>
                                    <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1"> Senior Accountant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className=" items-center inline-flex">

                            <img src={starfull} alt="" />
                            <img src={starfull} alt="" />
                            <img src={starhalf} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2"> 3.5 (86)</p>
                        </div>
                        <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">Rp 300K</p>
                    </div>
                </div>

                <div className="w-full p-4 bg-white rounded-[10px] border border-zinc-200 flex-col items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <img src={content4} alt="" />
                        <div className='flex-col justify-start items-start gap-2 inline-flex'>
                            <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">Big 4 Auditor Financial Analyst</h5>
                            </div>
                            <div className='justify-start items-start gap-2 inline-flex'>
                                <img src={avatar4} alt="" />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">Jenna Ortega</p>
                                    <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1"> Senior Accountant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className=" items-center inline-flex">

                            <img src={starfull} alt="" />
                            <img src={starfull} alt="" />
                            <img src={starhalf} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2"> 3.5 (86)</p>
                        </div>
                        <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">Rp 300K</p>
                    </div>
                </div>
                <div className="w-full p-4 bg-white rounded-[10px] border border-zinc-200 flex-col items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <img src={content5} alt="" />
                        <div className='flex-col justify-start items-start gap-2 inline-flex'>
                            <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">Big 4 Auditor Financial Analyst</h5>
                            </div>
                            <div className='justify-start items-start gap-2 inline-flex'>
                                <img src={avatar5} alt="" />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">Jenna Ortega</p>
                                    <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1"> Senior Accountant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className=" items-center inline-flex">

                            <img src={starfull} alt="" />
                            <img src={starfull} alt="" />
                            <img src={starhalf} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2"> 3.5 (86)</p>
                        </div>
                        <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">Rp 300K</p>
                    </div>
                </div>
                <div className="w-full p-4 bg-white rounded-[10px] border border-zinc-200 flex-col items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <img src={content6} alt="" />
                        <div className='flex-col justify-start items-start gap-2 inline-flex'>
                            <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">Big 4 Auditor Financial Analyst</h5>
                            </div>
                            <div className='justify-start items-start gap-2 inline-flex'>
                                <img src={avatar1} alt="" />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">Jenna Ortega</p>
                                    <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1"> Senior Accountant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className=" items-center inline-flex">

                            <img src={starfull} alt="" />
                            <img src={starfull} alt="" />
                            <img src={starhalf} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2"> 3.5 (86)</p>
                        </div>
                        <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">Rp 300K</p>
                    </div>
                </div>
                <div className="w-full p-4 bg-white rounded-[10px] border border-zinc-200 flex-col items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <img src={content7} alt="" />
                        <div className='flex-col justify-start items-start gap-2 inline-flex'>
                            <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">Big 4 Auditor Financial Analyst</h5>
                            </div>
                            <div className='justify-start items-start gap-2 inline-flex'>
                                <img src={avatar2} alt="" />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">Jenna Ortega</p>
                                    <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1"> Senior Accountant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className=" items-center inline-flex">

                            <img src={starfull} alt="" />
                            <img src={starfull} alt="" />
                            <img src={starhalf} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2"> 3.5 (86)</p>
                        </div>
                        <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">Rp 300K</p>
                    </div>
                </div>
                <div className="w-full p-4 bg-white rounded-[10px] border border-zinc-200 flex-col items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <img src={content8} alt="" />
                        <div className='flex-col justify-start items-start gap-2 inline-flex'>
                            <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">Big 4 Auditor Financial Analyst</h5>
                            </div>
                            <div className='justify-start items-start gap-2 inline-flex'>
                                <img src={avatar3} alt="" />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">Jenna Ortega</p>
                                    <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1"> Senior Accountant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className=" items-center inline-flex">

                            <img src={starfull} alt="" />
                            <img src={starfull} alt="" />
                            <img src={starhalf} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2"> 3.5 (86)</p>
                        </div>
                        <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">Rp 300K</p>
                    </div>
                </div>
                <div className="w-full p-4 bg-white rounded-[10px] border border-zinc-200 flex-col items-start gap-2 inline-flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                        <img src={content0} alt="" />
                        <div className='flex-col justify-start items-start gap-2 inline-flex'>
                            <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">Big 4 Auditor Financial Analyst</h5>
                            </div>
                            <div className='justify-start items-start gap-2 inline-flex'>
                                <img src={avatar4} alt="" />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">Jenna Ortega</p>
                                    <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1"> Senior Accountant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <div className=" items-center inline-flex">

                            <img src={starfull} alt="" />
                            <img src={starfull} alt="" />
                            <img src={starhalf} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <p className="text-zinc-400 text-xs font-medium font-dm-sans underline leading-none tracking-tight ml-2"> 3.5 (86)</p>
                        </div>
                        <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">Rp 300K</p>
                    </div>
                </div>
            </div>

            <div className="backdrop-brightness-0 w-full h-[25rem] bg-center my-4 rounded-xl flex-col justify-center items-center gap-10 inline-flex overflow-hidden" style={{ backgroundImage: `url(${promosi})` }}>
                <div className='absolute inset-0 bg-black opacity-70'></div>

                <div className='relative z-10 flex-col justify-center items-center inline-flex px-6'>
                    <p className="self-stretch text-center text-stone-300 text-base font-medium font-dm-sans leading-snug tracking-tight"> NEWSLETTER</p>
                    <h5 className="self-stretch text-center text-white text-2xl font-semibold font-poppins leading-relaxed">Mau Belajar Lebih Banyak?</h5>
                    <p className='self-stretch text-center text-gray-200 font-dm-sans'>Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com</p>
                    <div className="mt-4 w-full bg-white rounded-xl p-3">
                        <input className='text-center w-full font-poppins' type="text" placeholder='Masukkan Emailmu' />
                    </div>
                    <button className="mt-4 w-full bg-yellow-400 rounded-xl p-3 text-white font-poppins">Subscribe</button>
                </div>
            </div>



        </div>
    )
}

export default Content