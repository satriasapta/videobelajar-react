
import logo from '../../assets/logo.png'

const navbar = () => {
    return (
        <>
            <nav className='w-full flex items-center h-[4.5rem] justify-between shadow border-t border-b border-zinc-100 bg-white'>
                <div className="mx-6 sm:mx-16 flex justify-between w-full">
                    <img src={logo} alt="" />

                </div>


            </nav>

        </>
    )
}

export default navbar