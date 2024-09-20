/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

const KelolaKursus = ({ onClose, showAlertMessage, updateKelas, fetchCourses }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instructor, setInstructor] = useState('');
    const [company, setCompany] = useState('');
    const [rating, setRating] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [avatar, setAvatar] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (updateKelas) {
            setTitle(updateKelas.title);
            setDescription(updateKelas.description);
            setInstructor(updateKelas.instructor);
            setCompany(updateKelas.company);
            setRating(updateKelas.rating);
            setPrice(updateKelas.price);
            setImage(updateKelas.image);
            setAvatar(updateKelas.avatar);
            setIsEditing(true);
        }
    }, [updateKelas]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('instructor', instructor);
        formData.append('company', company);
        formData.append('rating', rating);
        formData.append('price', price);

        if (image) formData.append('image', image);
        if (avatar) formData.append('avatar', avatar);

        try {
            let response;
            if (isEditing) {
                response = await axios.put(`http://localhost:8080/courses/${updateKelas.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                });
                showAlertMessage('Kursus berhasil diperbarui');
            } else {
                response = await axios.post('http://localhost:8080/courses', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                });
                showAlertMessage('Kursus berhasil ditambahkan');
            }
        } catch (error) {
            console.error('Error submitting course:', error.response?.data || error.message);
        }
        onClose();
    };



    const handleCancel = () => {
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md w-full max-w-lg mt-12 max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">
                    {isEditing ? 'Edit Kursus' : 'Tambah Kursus'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Judul Kursus
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Deskripsi
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Pengajar
                        </label>
                        <input
                            type="text"
                            value={instructor}
                            onChange={(e) => setInstructor(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Perusahaan</label>
                        <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Rating
                        </label>
                        <input
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Harga
                        </label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Gambar Kursus (File)
                        </label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Avatar Pengajar (File)
                        </label>
                        <input
                            type="file"
                            onChange={(e) => setAvatar(e.target.files[0])}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"

                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            {isEditing ? 'Perbarui Kursus' : 'Tambahkan Kursus'}
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                        >
                            Batal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default KelolaKursus;
