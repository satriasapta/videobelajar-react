/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../firebase'

const KelolaKursus = ({ showModal, handleCloseModal, updateKelas, showAlertMessage }) => {
    const [per, setPerc] = useState(null)
    const [kursusBaru, setKursusBaru] = useState({
        title: "", description: "", instructor: "", price: "", company: "", rating: 0, image: "", avatar: ""
    })

    useEffect(() => {
        if (updateKelas) {
            setKursusBaru(updateKelas);
        } else {
            setKursusBaru({
                title: "", description: "", instructor: "", price: "", company: "", rating: 0, image: "", avatar: ""
            });
        }
    }, [updateKelas]);

    useEffect(() => {
        const uploadFile = (file, field) => {
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload ${field} is ${progress}% done`);
                setPerc(progress);
                switch (snapshot.state) {
                    case 'paused':
                        console.log(`Upload ${field} is paused`);
                        break;
                    case 'running':
                        console.log(`Upload ${field} is running`);
                        break;
                    default:
                        break;
                }
            }, (error) => {
                console.error(`Error uploading ${field}:`, error);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setKursusBaru((prev) => ({ ...prev, [field]: downloadURL }));
                });
            });
        };
        if (kursusBaru.image && typeof kursusBaru.image !== 'string') {
            uploadFile(kursusBaru.image, 'image');
        }
        if (kursusBaru.avatar && typeof kursusBaru.avatar !== 'string') {
            uploadFile(kursusBaru.avatar, 'avatar');
        }
    }, [kursusBaru.image, kursusBaru.avatar]);

    const handleChange = (e) => {
        const { name, files, value } = e.target
        if (files) {
            setKursusBaru({ ...kursusBaru, [name]: files[0] })
        } else {
            setKursusBaru({ ...kursusBaru, [name]: value })
        }
    }

    const { title, description, instructor, price, company, rating } = kursusBaru

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (typeof kursusBaru.image === 'object' || typeof kursusBaru.avatar === 'object') {
            alert('Tunggu hingga proses upload selesai')
            return
        }
        try {
            const kursusId = updateKelas ? updateKelas.id : uuidv4();
            await setDoc(doc(db, "kursus", kursusId), kursusBaru);
            showAlertMessage(updateKelas ? 'Kursus Berhasil Diperbarui' : 'Kursus Berhasil Ditambahkan')
        } catch (err) {
            console.error("Error setting document: ", err);
        }
        handleCloseModal();
    };
    if (!showModal) return null
    return (
        <>
            <div className="fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-11/12 max-h-screen md:w-2/3 lg:w-1/2 overflow-y-auto">
                    <div className="flex justify-between items-center border-b p-4">
                        <h5 className="text-xl font-medium">{updateKelas ? 'Edit Kursus' : 'Tambah Kursus'}</h5>
                        <button className="text-black" onClick={handleCloseModal}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700">Judul Kursus</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Judul Kursus " required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700">Deskripsi Kursus</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={description}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Deskripsi Kursus " required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="instructor" className="block text-gray-700">Pengajar</label>
                            <input
                                type="text"
                                name="instructor"
                                id="instructor"
                                value={instructor}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Pengajar " required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company" className="block text-gray-700">Perusahaan</label>
                            <input
                                type="text"
                                name="company"
                                id="company"
                                value={company}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Pengajar " required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rating" className="block text-gray-700">Rating</label>
                            <input
                                type="text"
                                name="rating"
                                id="rating"
                                value={rating}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Rating" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700">Harga</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                value={price}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Harga" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700">Gambar</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Gambar" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="avatar" className="block text-gray-700">Foto Pengajar</label>
                            <input
                                type="file"
                                name="avatar"
                                id="avatar"
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Gambar" />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button disabled={per !== null && per < 100} type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:bg-green-300">{updateKelas ? 'Edit Kursus' : 'Tambah Kursus'}</button>
                            <button type="button" onClick={handleCloseModal} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Tutup</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default KelolaKursus
