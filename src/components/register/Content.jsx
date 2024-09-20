import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/eye.png';
import eyeSlash from '../../assets/eye-slash.png';
import google from '../../assets/google.png';

const Content = () => {
    const [fullname, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setError('Kata sandi dan konfirmasi kata sandi tidak sesuai');
            return;
        }
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname,
                    username,
                    email,
                    password,
                    phone,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Pendaftaran gagal');
            } else {
                navigate('/login', { state: { successMessage: "Pendaftaran akun berhasil. Silakan login" } });
            }
        } catch (err) {
            setError('Terjadi kesalahan. Silakan coba lagi nanti.');
        }
    };

    return (
        <div className="w-full justify-center items-center flex sm:max-w-[50rem] sm:mx-auto">
            <div className="my-8 mx-6 bg-white w-full justify-center items-center inline-block mt-28">
                <div className="w-full inline-block">
                    <h2 className="text-2xl text-neutral-800 font-semibold font-poppins mt-8 text-center">Pendaftaran Akun</h2>
                    <p className="text-gray-400 text-sm font-normal text-center pt-1">Yuk, daftarkan akunmu sekarang juga!</p>
                </div>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className="font-dm-sans text-sm font-normal">Nama Lengkap <span className="text-red-500">*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input
                            type="text"
                            placeholder="Masukkan Nama Lengkap"
                            className="w-full focus:outline-none"
                            value={fullname}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className="font-dm-sans text-sm font-normal">Username <span className="text-red-500">*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input
                            type="text"
                            placeholder="Masukkan Nama Lengkap"
                            className="w-full focus:outline-none"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className="font-dm-sans text-sm font-normal">E-Mail <span className="text-red-500">*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input
                            type="email"
                            placeholder="Masukkan Email"
                            className="w-full focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className="font-dm-sans text-sm font-normal">Nomor HP <span className="text-red-500">*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input
                            type="tel"
                            placeholder="Masukkan Nomor HP"
                            className="w-full focus:outline-none"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className="font-dm-sans text-sm font-normal">Password <span className="text-red-500">*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Masukkan Password"
                            className="w-full focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img
                            src={showPassword ? eyeSlash : eye}
                            alt="Show/Hide Password"
                            className="cursor-pointer w-8 h-8"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                </div>
                <div className="w-full px-4 pt-4 sm:px-10">
                    <p className="font-dm-sans text-sm font-normal">Konfirmasi Kata Sandi <span className="text-red-500">*</span></p>
                    <div className="flex justify-between w-full bg-white border border-gray-300 rounded-lg p-2">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Masukkan Password"
                            className="w-full focus:outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <img
                            src={showPassword ? eyeSlash : eye}
                            alt="Show/Hide Password"
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer w-8 h-8"
                        />
                    </div>
                </div>

                <div className="w-full px-4 pt-4 sm:px-10 gap-6 block">
                    <button
                        onClick={handleRegister}
                        className="bg-green-500 text-white font-semibold font-dm-sans rounded-lg w-full py-2"
                    >
                        Daftar
                    </button>
                    <button
                        onClick={() => navigate('/login')}
                        className="mt-4 bg-green-100 text-green-500 font-semibold font-dm-sans rounded-lg w-full py-2"
                    >
                        Masuk
                    </button>
                    <div className="flex items-center justify-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">atau</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <button className="bg-white font-dm-sans rounded-lg w-full py-2 mb-8 border border-gray-300 items-center justify-center inline-flex">
                        <img src={google} alt="" className="relative bottom-[1px]" />
                        <span className="px-2 text-gray-500 font-semibold">Daftar dengan Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Content;
