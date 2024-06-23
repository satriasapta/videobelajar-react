
import logo from '../../assets/logo.png'
import hamburger from '../../assets/hamburger.png'
import profile from '../../assets/profil.png'


const navbar = () => {
    return (
        <>
            <nav className='w-full flex items-center h-[4.5rem] justify-between shadow border-t border-b border-zinc-100 bg-white'>
                <div className="mx-6 sm:mx-16 flex justify-between w-full">
                    <img src={logo} alt="" />
                    <div className="sm:hidden">
                        <img src={hamburger} alt="" />
                    </div>
                    <div className="hidden sm:inline-flex gap-10 items-center font-normal text-gray-400">
                        <h5 className='font-dm-sans'>Kategori</h5>
                        <img src={profile} alt="" className='w-11 rounded-xl' />
                    </div>
                </div>


            </nav>

        </>
    )
}

export default navbar