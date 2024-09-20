import { useState, useEffect } from 'react'
import axios from 'axios'
import { Rating } from '../../contexts/Rating'
import promosi from '../../assets/promosi.jpeg'

const Content = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/courses', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setCourses(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : 'Error fetching courses');
            }
        };

        fetchCourses();
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className='px-5 sm:px-16 sm:py-12'>
            <div className="menu flex flex-col sm:flex-row sm:gap-8">
                {['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'].map((category, index) => (
                    <div key={index} className={`flex-col justify-center items-start inline-flex ${index === 0 ? 'text-orange-600' : 'text-zinc-400'}`}>
                        <div className="pr-9 py-3 justify-start items-center gap-1.5 inline-flex">
                            <div className="text-sm font-medium font-dm-sans leading-tight tracking-tight">{category}</div>
                        </div>
                        {index === 0 && <div className="w-[52px] h-1.5 bg-orange-600 rounded-xl" />}
                    </div>
                ))}
            </div>

            <div className="sm:w-full sm:inline-flex sm:justify-evenly sm:items-start sm:flex-wrap">
                {courses.map((course, index) => {
                    return (
                        <div key={course.id} className="card mb-6 sm:mb-0">
                            <div className="card-content">
                                <img src={`http://localhost:8080/assets/${course.image}`} className='object-cover object-center w-24 h-24 sm:w-full sm:h-48 rounded-xl sm:overflow-hidden sm:mb-2' alt={`Content ${index + 1}`} />
                                <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                    <div className='flex-col justify-start items-start gap-2 inline-flex'>
                                        <h5 className="self-stretch text-neutral-800 text-base font-semibold font-poppins leading-tight">{course.title}</h5>
                                        <p className='text-zinc-400 text-xs font-dm-sans hidden sm:block'>{course.description}</p>
                                    </div>
                                    <div className='justify-start items-start gap-2 inline-flex'>
                                        <img src={`http://localhost:8080/assets/${course.avatar}`} alt={`Avatar ${index + 1}`} className='w-9 rounded-lg' />
                                        <div className="flex-col justify-start items-start inline-flex">
                                            <p className="text-neutral-800 text-sm font-medium font-dm-sans leading-tight tracking-tight">{course.instructor}</p>
                                            <p className="text-zinc-400 text-xs font-normal font-dm-sans leading-none tracking-tight pt-1">Senior Accountant in <span className='text-zinc-400 text-xs font-bold font-dm-sans leading-none'>{course.company}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full justify-between items-center inline-flex">
                                <Rating rating={course.rating} />
                                <p className="text-green-500 text-xl font-semibold font-poppins leading-normal">{course.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="backdrop-brightness-0 w-full h-[25rem] bg-center my-4 rounded-xl flex-col justify-center items-center gap-10 inline-flex overflow-hidden" style={{ backgroundImage: `url(${promosi})` }}>
                <div className='absolute inset-0 bg-black opacity-70'></div>
                <div className='relative z-10 flex-col justify-center items-center inline-flex px-6 sm:max-w-[35rem]'>
                    <p className="self-stretch text-center text-stone-300 text-base font-medium font-dm-sans leading-snug tracking-tight">NEWSLETTER</p>
                    <h5 className="self-stretch text-center text-white text-2xl font-semibold font-poppins leading-relaxed">Mau Belajar Lebih Banyak?</h5>
                    <p className='self-stretch text-center text-gray-200 font-dm-sans'>Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.com</p>
                    <div className="mt-4 w-full bg-white rounded-xl p-3 sm:inline-flex">
                        <input className='text-center w-full font-poppins outline-none' type="text" placeholder='Masukkan Emailmu' />
                        <button className="hidden sm:block w-40 bg-yellow-500 rounded-xl p-2 text-white font-poppins hover:bg-yellow-600">Subscribe</button>
                    </div>
                    <button className="mt-4 w-full bg-yellow-400 rounded-xl p-3 text-white font-poppins sm:hidden">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Content;
