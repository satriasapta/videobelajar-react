import { useEffect, useState } from 'react';
import useCourseStore from '../../contexts/CourseContext';
import TambahKursus from './KelolaKursus';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';


const Content = () => {
    const [showModal, setShowModal] = useState(false);
    const [updateKelas, setUpdateKelas] = useState(null);
    const [data, setData] = useState([]);
    const { hapusKelas } = useCourseStore();

    useEffect(() => {
        const fetchCourses = async () => {
            let courses = [];
            try {
                const querySnapshot = await getDocs(collection(db, "kursus"));
                querySnapshot.forEach((doc) => {
                    courses.push({ ...doc.data(), id: doc.id });
                });
                setData(courses);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCourses();
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
        setUpdateKelas(null);
    };

    const handleAddCourseClick = () => {
        setShowModal(true);
    };

    const handleEditCourseClick = (course) => {
        setUpdateKelas(course);
        setShowModal(true);
    };


    return (
        <>
            <div className='px-5 py-7 sm:px-16 sm:py:12'>
                <div className="">
                    <div className="flex justify-between items-center mb-4 mt-16">
                        <h1 className="text-2xl font-bold">List Kursus</h1>
                        <button
                            onClick={handleAddCourseClick}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                            Tambah Kursus
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    No
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Gambar
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Judul Kursus
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Deskripsi
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Pengajar
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Foto Pengajar
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Rating
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Harga
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((course, index) => (
                                <tr key={course.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{index + 1}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap w-52">
                                        <img src={course.image} className='max-h-28 w-full object-cover object-center' alt="course"></img>
                                    </td>
                                    <td className="px-6 py-4 min-w-40 max-w-xs break-words">
                                        <div className="text-sm text-gray-900">{course.title}</div>
                                    </td>
                                    <td className="px-6 py-4 min-w-64 break-words">
                                        <div className="text-sm text-gray-900">{course.description}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{course.instructor}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={course.avatar} className='max-h-28 w-full object-cover object-center' alt="course"></img>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{course.rating}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{course.price}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                                        <button
                                            onClick={() => handleEditCourseClick(course)}
                                            className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600'>Edit</button>
                                        <button
                                            onClick={() => hapusKelas(course.id)} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <TambahKursus showModal={showModal} handleCloseModal={handleCloseModal} updateKelas={updateKelas} />
        </>
    );
};

export default Content;
