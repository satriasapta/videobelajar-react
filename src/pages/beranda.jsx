import { useState } from 'react';
import Content from '../components/beranda/Content.jsx';
import Footer from '../components/beranda/Footer.jsx';
import Header from '../components/beranda/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import '../index.css';

export default function Beranda() {
    const [isLoggedIn] = useState(true); // Ubah status login sesuai dengan aplikasi Anda

    return (
        <div className="bg-background">
            <Navbar isLoggedIn={isLoggedIn} />
            <Header />
            <Content />
            <Footer />
        </div>
    );
}