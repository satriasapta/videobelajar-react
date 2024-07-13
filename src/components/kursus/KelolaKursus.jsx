import { useContext, useEffect, useState } from "react"
import { CourseContext } from "../../contexts/CourseContext"

const KelolaKursus = ({ showModal, handleCloseModal, updateKelas }) => {
    const { tambahKelas, editKelas } = useContext(CourseContext)
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
    const handleChange = (e) => {
        setKursusBaru({ ...kursusBaru, [e.target.name]: e.target.value })
    }

    const { title, description, instructor, price, company, rating, image, avatar } = kursusBaru

    const handleSubmit = (e) => {
        e.preventDefault()
        if (updateKelas) {
            editKelas(updateKelas.id, kursusBaru)
        } else {
            tambahKelas(title, description, instructor, price, company, rating, image, avatar)
        }
        handleCloseModal()
    }
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
                                type="text"
                                name="image"
                                id="image"
                                value={image}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Gambar" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="avatar" className="block text-gray-700">Foto Pengajar</label>
                            <input
                                type="text"
                                name="avatar"
                                id="avatar"
                                value={avatar}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-lg" placeholder="Gambar" />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">{updateKelas ? 'Edit Kursus' : 'Tambah Kursus'}</button>
                            <button type="button" onClick={handleCloseModal} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Tutup</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default KelolaKursus
