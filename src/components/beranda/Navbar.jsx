import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import hamburger from '../../assets/hamburger.png'
import profile from '../../assets/profil.png'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menu = ["Logout"];
    const menuRef = useRef();
    const imgRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && imgRef.current && !imgRef.current.contains(e.target)) {
                console.log("outside");
                setOpen(false);
            }
        };

        if (open) {
            setTimeout(() => {
                window.addEventListener("click", handleClickOutside);
            }, 0);
        } else {
            window.removeEventListener("click", handleClickOutside);
        }

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [open]);

    const handleMenuClick = (item) => {
        if (item === "Logout") {
            navigate("/login");
        }
    };

    return (
        <nav className='w-full flex items-center h-[4.5rem] justify-between shadow border-t border-b border-zinc-100 bg-white fixed z-20'>
            <div className="mx-6 sm:mx-16 flex justify-between items-center w-full relative">
                <img src={logo} alt="" />
                <div className="sm:hidden">
                    <img
                        src={hamburger}
                        alt=""
                        ref={imgRef}
                        onClick={() => {
                            console.log("Hamburger clicked");
                            setOpen(!open);
                        }}
                    />
                </div>
                <div className="hidden sm:inline-flex gap-10 items-center font-normal text-gray-600">
                    <h5 className='font-dm-sans'>Kategori</h5>
                    <img
                        ref={imgRef}
                        onClick={() => setOpen(!open)}
                        src={profile} alt="" className='w-11 rounded-xl cursor-pointer' />
                </div>
                {
                    open &&
                    <div ref={menuRef} className="flex bg-white p-4 w-36 shadow-lg absolute z-10 right-0 top-full mt-2">
                        <ul className='w-full'>
                            {
                                menu.map((item, index) => (
                                    <li onClick={() => handleMenuClick(item)} className='p-2 text-sm cursor-pointer rounded-md hover:bg-blue-100' key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;