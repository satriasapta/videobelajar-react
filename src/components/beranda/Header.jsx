import sambutan from '../../assets/sambutan.jpeg'
import '../../../src/index.css'
const Header = () => {
    return (
        <div className='px-5 py-7 sm:px-16 sm:py:12'>
            <div className="backdrop-brightness-50  bg-cover  bg-center  w-full h-[25rem] rounded-xl overflow-hidden sm:items-center mt-16" style={{ backgroundImage: `url(${sambutan})` }}>
                <div className='absolute inset-0 bg-black opacity-80'></div>
                <div className=" relative z-10 mt-8 px-5 flex-col items-center gap-3 inline-flex w-full sm:mt-12">
                    <h2 className="self-stretch text-center text-white text-2xl font-bold  font-poppins sm:text-4xl lg:text-5xl lg:px-20 xl:px-44 xl:6xl  "> Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h2>
                    <p className="text-center text-white text-sm font-medium font-dm-sans leading-tight tracking-tight sm:text-base lg:text-xl lg:px-20 xl:px-44">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>

                    <div className='mt-4 px-3 h-10 bg-green-500 rounded-[10px] flex-col justify-center items-center inline-flex hover:bg-green-600'>
                        <div className="px-2 py-2.5 flex-col justify-start items-start gap-2 flex">
                            <button className="text-white text-sm font-normal font-dm-sans leading-tight tracking-tight sm:text-base">Temukan Video Course untuk Dipelajari!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-flex items-center gap-4 mt-4">
                <div className="flex flex-col justify-center items-start gap-2.5">
                    <h1 className="text-2xl text-neutral-800 font-semibold">Koleksi Video Pembelajaran Unggulan</h1>
                    <p className='text-neutral-500 text-sm font-normal tracking-tight'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                </div>

            </div>
        </div>
    )
}

export default Header