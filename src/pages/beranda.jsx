import Content from '../components/beranda/Content.jsx'
import Footer from '../components/beranda/Footer.jsx'

import Header from '../components/beranda/Header.jsx'
import Navbar from '../components/beranda/Navbar.jsx'
import '../index.css'

export default function beranda() {
    return (
        <div className="bg-background">
            <Navbar />
            {/* <div className='px-5 py-7 flex-col justify-start items-center gap-6 inline-flex'> */}
            <Header />
            <Content />
            <Footer />
        </div>
    )
}