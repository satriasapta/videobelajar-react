import { useEffect, useState } from 'react';
import axios from 'axios';
import TambahKursus from './KelolaKursus';
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
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, []);

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
            await axios.delete(`http://localhost:8080/courses/${courseIdToDelete}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            showAlertMessage('Kursus berhasil dihapus');
            fetchCourses();
        } catch (error) {
            console.log('Error deleting course:', error);
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

    const sortedData = [...courses].sort((a, b) => {
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
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('company')}
                                >
                                    Perusahaan {getArrow('company')}
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Foto Pengajar
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={() => handleSort('rating')}
                                >
                                    Rating {getArrow('rating')}
                                </th>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
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
                                        <img
                                            src={`http://localhost:8080/assets/${course.image}`}
                                            className='max-h-28 w-full object-cover object-center'
                                            alt="course"
                                        />
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
                                        <div className="text-sm text-gray-900">{course.company}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img
                                            src={`http://localhost:8080/assets/${course.avatar}`}
                                            className='max-h-28 w-full object-cover object-center'
                                            alt="avatar"
                                        />
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
                                            className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600'>Edit
                                        </button>
                                        <button
                                            onClick={() => confirmDelete(course.id)}
                                            className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                    </table>
                </div>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={courses.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            {showModal && (
                <TambahKursus
                    onClose={handleCloseModal}
                    showAlertMessage={showAlertMessage}
                    updateKelas={updateKelas}
                    fetchCourses={fetchCourses}
                />
            )}

            {showConfirmModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md">
                        <p>Apakah Anda yakin ingin menghapus kursus ini?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mr-2"
                            >
                                Ya
                            </button>
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                            >
                                Tidak
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Content;
