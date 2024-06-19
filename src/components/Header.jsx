import sambutan from '../assets/sambutan.jpeg'
const Header = () => {
    return (
        <>

            <div className="backdrop-brightness-50  bg-cover  bg-center  w-full h-[25rem] rounded-xl overflow-hidden" style={{ backgroundImage: `url(${sambutan})` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className=" relative z-10 mt-8 px-5 flex-col justify-start items-center gap-3 inline-flex">
                    <h2 className="self-stretch text-center text-white text-2xl font-bold  font-poppins  "> Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h2>
                    <p className="text-center text-white text-m font-medium font-dm-sans leading-tight tracking-tight">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>

                    <div className='mt-4 w-[280px] h-10 bg-green-500 rounded-[10px] flex-col justify-center items-center inline-flex'>
                        <div className="px-2 py-2.5 flex-col justify-start items-start gap-2 flex">
                            <p className="text-white text-sm font-normal font-dm-sans leading-tight tracking-tight">Temukan Video Course untuk Dipelajari!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-2.5 ">
                <h1 className="text-2xl text-neutral-800 font-semibold">Koleksi Video Pembelajaran Unggulan</h1>
                <p className='text-neutral-500 text-sm font-normal tracking-tight'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
            </div>
        </>
    )
}

export default Header