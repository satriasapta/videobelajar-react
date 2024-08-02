import { useEffect, useState } from 'react';
import TambahKursus from './KelolaKursus';
import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../../services/api/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, deleteCourseInFirebase } from '../../store/redux/slices/courseSlice';
import Pagination from './Pagination';

const Content = () => {
    const [showModal, setShowModal] = useState(false);
    const [updateKelas, setUpdateKelas] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [courseIdToDelete, setCourseIdToDelete] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

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

    const confirmDelete = (id) => {
        setCourseIdToDelete(id);
        setShowConfirmModal(true);
    };

    const handleDelete = async () => {
        try {
            const courseToDelete = data.find((course) => course.id === courseIdToDelete);
            if (courseToDelete) {
                const imageRef = ref(storage, courseToDelete.image);
                const avatarRef = ref(storage, courseToDelete.avatar);
                await deleteObject(imageRef);
                await deleteObject(avatarRef);
            }
            await dispatch(deleteCourseInFirebase(courseIdToDelete)).unwrap();
            showAlertMessage('Kursus berhasil dihapus');
        } catch (error) {
            console.log(error);
            showAlertMessage('Gagal menghapus kursus');
        } finally {
            setShowConfirmModal(false);
            setCourseIdToDelete(null);
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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

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
                            {currentItems.map((course, index) => (
                                <tr key={course.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{indexOfFirstItem + index + 1}</div>
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
                                            onClick={() => confirmDelete(course.id)} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    totalItems={data.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setItemsPerPage={setItemsPerPage}
                />
            </div>


            {/* Modal Konfirmasi Penghapusan */}
            {showConfirmModal && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Konfirmasi Penghapusan</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Apakah Anda yakin ingin menghapus kursus ini? Tindakan ini tidak dapat diurungkan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={handleDelete}
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Hapus
                                </button>
                                <button
                                    onClick={() => setShowConfirmModal(false)}
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                >
                                    Batal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <TambahKursus showModal={showModal} handleCloseModal={handleCloseModal} updateKelas={updateKelas} showAlertMessage={showAlertMessage} />
        </>
    );
};

export default Content;
