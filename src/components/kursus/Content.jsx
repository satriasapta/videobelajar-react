import { useEffect, useState } from 'react';
import TambahKursus from './KelolaKursus';
import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../../services/api/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, deleteCourseInFirebase } from '../../store/redux/slices/courseSlice'; // import deleteCourseInFirebase

const Content = () => {
    const [showModal, setShowModal] = useState(false);
    const [updateKelas, setUpdateKelas] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.course);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCourses());
        }
    }, [dispatch, status]);

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

    const handleDelete = async (id) => {
        try {
            const courseToDelete = data.find((course) => course.id === id);
            if (courseToDelete) {
                const imageRef = ref(storage, courseToDelete.image);
                const avatarRef = ref(storage, courseToDelete.avatar);
                await deleteObject(imageRef);
                await deleteObject(avatarRef);
            }
            await dispatch(deleteCourseInFirebase(id)).unwrap(); // Hapus dari Redux store
            showAlertMessage('Kursus berhasil dihapus');
        } catch (error) {
            console.log(error);
            showAlertMessage('Gagal menghapus kursus');
        }
    };

    const showAlertMessage = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const getArrow = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'ascending' ? '▲' : '▼';
        }
        return '↕';
    };

    return (
        <>
            <div className='px-5 py-7 sm:px-16 sm:py-12'>
                <div className="">
                    {showAlert && (
                        <div className="bg-green-400 text-white text-center py-2 mb-4 rounded-md mt-12">
                            {alertMessage}
                        </div>
                    )}
                    <div className="flex justify-between items-center mb-4 mt-10">
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
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    No
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Gambar
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('title')}
                                >
                                    Judul Kursus {getArrow('title')}
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('description')}
                                >
                                    Deskripsi {getArrow('description')}
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('instructor')}
                                >
                                    Pengajar {getArrow('instructor')}
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Foto Pengajar
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer min-w-28"
                                    onClick={() => handleSort('rating')}
                                >
                                    Rating {getArrow('rating')}
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer min-w-28"
                                    onClick={() => handleSort('price')}
                                >
                                    Harga {getArrow('price')}
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sortedData.map((course, index) => (
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
                                            onClick={() => handleDelete(course.id)} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <TambahKursus showModal={showModal} handleCloseModal={handleCloseModal} updateKelas={updateKelas} showAlertMessage={showAlertMessage} />
        </>
    );
};

export default Content;
