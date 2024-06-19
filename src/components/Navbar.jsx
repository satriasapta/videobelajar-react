
import logo from '../assets/logo.png'
import hamburger from '../assets/hamburger.png'


const navbar = () => {
    return (
        <>
            <nav className='flex items-center h-[4.5rem] justify-between w-full shadow border-t border-b border-zinc-100 bg-white'>
                <div className="mx-6">
                    <img src={logo} alt="" />
                </div>
                <div className="mx-6">
                    <img src={hamburger} alt="" />
                </div>
            </nav>

        </>
    )
}

export default navbar