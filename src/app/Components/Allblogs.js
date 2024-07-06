import React, { useState, useEffect } from 'react';
import { db, storage } from '../../../firebase';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const stripHtmlTags = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const fetchedBlogs = [];
        querySnapshot.forEach((doc) => {
          fetchedBlogs.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      alert('Blog deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Error deleting blog. Please try again later.');
    }
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentBlog(null);
  };

  const handleSave = async () => {
    try {
      let updatedBlog = { ...currentBlog };

      if (image) {
        const storageRef = ref(storage, `blogs/${currentBlog.id}/${image.name}`);
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        updatedBlog = { ...updatedBlog, blogImageUrl: url };
      }

      await updateDoc(doc(db, 'blogs', currentBlog.id), updatedBlog);

      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog.id === currentBlog.id ? updatedBlog : blog))
      );

      alert('Blog updated successfully!');
      handleModalClose();
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Error updating blog. Please try again later.');
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto mt-5 h-[800px] overflow-hidden">
      <h1 className="text-2xl font-semibold mb-4 text-white">Blog List</h1>
      <table className="min-w-full bg-gray-700 border-collapse border border-gray-300 w-full text-white">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Author</th>
            <th className="border border-gray-300 px-4 py-2">Content</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Slug</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className=' text-center'>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="border border-gray-300 px-4 py-2 ">
                <img src={blog.blogImageUrl} alt={blog.title} className="w-20 h-30 object-fit" />
              </td>
              <td className="border border-gray-300 px-4 py-2">{blog.author}</td>
              <td className="border border-gray-300 px-4 py-2">{stripHtmlTags(blog.content).slice(0, 50)}...</td>
              <td className="border border-gray-300 px-4 py-2">{blog.date}</td>
              <td className="border border-gray-300 px-4 py-2">{blog.slug}</td>
              <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => handleDelete(blog.id)} className=" bg-red-500 text-white px-3 py-1 rounded-md  mb-2 w-20">
                  Delete
                </button>
                <button onClick={() => handleEdit(blog)} className="bg-blue-600 text-white px-3 py-1 rounded-md w-20">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
          className="items-center justify-center z-50  bg-gray-900 rounded-lg overflow-hidden"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-30%, -50%)',
            zIndex: 50,
            maxHeight: '90%',
            overflowY: 'auto',
            padding: '0px 0px',
            boxShadow: '0px 0px 30px rgba(0, 0, 0, 1)',
          }}
        >
          <div className="p-8 rounded-lg ">
            <h2 className="text-xl font-semibold mb-4 text-white">Edit Blog</h2>
            <label className="block font-medium  text-white mb-2">Author</label>
            <input
              type="text"
              value={currentBlog?.author || ''}
              onChange={(e) => setCurrentBlog({ ...currentBlog, author: e.target.value })}
              placeholder="Author"
              className="border border-gray-300 px-4 py-2 rounded-md w-full mb-4 bg-gray-700 text-white"
            />
            <label className="block font-medium  text-white mb-2">Content</label>
            <ReactQuill
              value={currentBlog?.content || ''}
              onChange={(value) => setCurrentBlog({ ...currentBlog, content: value })}
              className="mb-4 bg-gray-700 text-black "
              modules={{
                toolbar: [
                  [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  ['bold', 'italic', 'underline'],
                  [{ 'align': [] }],
                  [ 'image', 'video'],
                
                ]
              }}
              style={{ color: 'black', backgroundColor: 'white' }}
            />
            <label className="block font-medium  text-white mb-2">Date</label>
            <input
              type="date"
              value={currentBlog?.date || ''}
              onChange={(e) => setCurrentBlog({ ...currentBlog, date: e.target.value })}
              placeholder="Date"
              className="border border-gray-300 px-4 py-2 rounded-md w-full mb-4 bg-gray-700 text-white"
            />
           
            <label className="block font-medium  text-white mb-2">Title</label>
            <input
              type="text"
              value={currentBlog?.title || ''}
              onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
              placeholder="Title"
              className="border border-gray-300 px-4 py-2 rounded-md w-full mb-4 bg-gray-700 text-white"
            />

<label className="block font-medium  text-white mb-2">Slug</label>
            <input
              type="text"
              value={currentBlog?.slug || ''}
              onChange={(e) => setCurrentBlog({ ...currentBlog, slug: e.target.value })}
              placeholder="Slug"
              className="border border-gray-300 px-4 py-2 rounded-md w-full mb-4 bg-gray-700 text-white"
              disabled
            />

            <div className="mb-4">
              <label className="block font-medium  text-white mb-2">Blog Image:</label>
              {currentBlog?.blogImageUrl && (
                <img src={currentBlog.blogImageUrl} alt={currentBlog.title} className="h-40 object-fit mb-2" />
              )}
              <input type="file" onChange={handleImageChange} className="border border-gray-300 px-4 py-2 rounded-md w-full text-white" />
            </div>

            <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Save
            </button>
            <button onClick={handleModalClose} className=" text-white px-4 py-2 rounded-md ml-2 bg-red-500 ">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
