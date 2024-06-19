import notebook from '../assets/Notebook.svg'
import dropdown from '../assets/arrowDown.svg'
import harga from '../assets/harga.svg'
import durasi from '../assets/durasi.png'

const Dropdown = () => {
    return (
        <>
            <div className=' w-full h-auto p-4 bg-white rounded-xl border border-zinc-700/opacity-10 flex-col justify-start items-start gap-3 inline-flex'>
                <div className='w-full h-auto px-4 justify-between items-center inline-flex'>
                    <h2 className="text-zinc-800 text-lg font-semibold">Filter</h2>
                    <h2 className="text-orange-500  font-medium font-dm-sans leading-snug tracking-tight">Reset</h2>
                </div>
                <div className='w-full h-auto px-4 py-3 bg-white rounded-xl border border-zinc-200 flex-col justify-center items-start gap-4 inline-flex'>
                    <div className="w-full justify-start items-center gap-4 inline-flex">
                        <img src={notebook} alt="" />
                        <div className="grow shrink text-green-500 text-base font-medium font-dm-sans leading-snug tracking-tight">Bidang Studi</div>
                        <img src={dropdown} alt="" className='w-6 h-6 left-20 ' />
                    </div>
                </div>
                <div className='w-full h-auto px-4 py-3 bg-white rounded-xl border border-zinc-200 flex-col justify-center items-start gap-4 inline-flex'>
                    <div className="w-full justify-start items-center gap-4 inline-flex">
                        <img src={harga} alt="" />
                        <div className="grow shrink text-green-500 text-base font-medium font-dm-sans leading-snug tracking-tight">Harga</div>
                        <img src={dropdown} alt="" className='w-6 h-6 left-20 ' />
                    </div>
                </div>
                <div className='w-full h-auto px-4 py-3 bg-white rounded-xl border border-zinc-200 flex-col justify-center items-start gap-4 inline-flex'>
                    <div className="w-full justify-start items-center gap-4 inline-flex">
                        <img src={durasi} alt="" />
                        <div className="grow shrink text-green-500 text-base font-medium font-dm-sans leading-snug tracking-tight">Durasi</div>
                        <img src={dropdown} alt="" className='w-6 h-6 left-20 ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown