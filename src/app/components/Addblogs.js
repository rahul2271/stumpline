'use client';

import React, { useState, useRef } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor's CSS
import { db, storage } from "../../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddBlogs = () => {
  const [blogData, setBlogData] = useState({
    author: "",
    content: "",
    date: "",
    slug: "",
    title: "",
  });

  const [blogImage, setBlogImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (content) => {
    setBlogData({ ...blogData, content });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setBlogImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure slug is set correctly
      const blogDataWithSlug = {
        ...blogData,
        slug: blogData.title.toLowerCase().replace(/ /g, "-"),
      };

      const docRef = await addDoc(collection(db, "blogs"), blogDataWithSlug);
      console.log("Document written with ID: ", docRef.id);

      let blogImageUrl = "";
      if (blogImage) {
        const blogRef = ref(storage, `blogs/${docRef.id}/blogImage`);
        await uploadBytes(blogRef, blogImage);
        console.log("Uploaded a blob or file!");
        blogImageUrl = await getDownloadURL(blogRef);
        console.log("File available at", blogImageUrl);
      }

      const blogDataWithImage = {
        ...blogDataWithSlug,
        blogImageUrl,
      };

      await updateDoc(doc(db, "blogs", docRef.id), blogDataWithImage);
      console.log("Document successfully updated!");

      setBlogData({
        author: "",
        content: "",
        date: "",
        slug: "",
        title: "",
      });
      setBlogImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      alert("Blog data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading blog data:", error);
      alert("Error uploading blog data. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="space-y-1">
        <div className="w-full p-2">
          <label className="block text-white font-semibold mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={blogData.author}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-700 text-white"
          />
        </div>
        <div className="w-full p-2">
          <label className="block text-white font-semibold mb-2">Content</label>
          <SunEditor 
            setOptions={{
              height: 200,
              buttonList: [
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['paragraphStyle', 'blockquote'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                ['fontColor', 'hiliteColor', 'textStyle'],
                ['removeFormat'],
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'lineHeight'],
                ['table', 'link', 'image', 'video', 'audio'], // media
                ['fullScreen', 'showBlocks', 'codeView'],
                ['print'],
                ['save', 'template'],
              ],
            }}
            onChange={handleContentChange}
          />
        </div>
        <div className="w-full p-2">
          <label className="block text-white font-semibold mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={blogData.date}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-700 text-white"
          />
        </div>
        <div className="w-full p-2">
          <label className="block text-white font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-700 text-white"
          />
        </div>
        <div className="w-full p-2">
          <label className="block text-white font-semibold mb-2">Slug</label>
          <input
            type="text"
            name="slug"
            value={blogData.title.toLowerCase().replace(/ /g, "-")}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-700 text-white"
            disabled
          />
        </div>
        <div className="w-full p-2">
          <label className="block text-white font-semibold mb-2">
            Blog Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 rounded-md w-full bg-gray-700 text-white"
            ref={fileInputRef}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-red-500 mb-2">
          ** Please click only once the Upload Button and wait for alert message, do not press multiple times, it will lead to store multiple responses for same above data.
          </p>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
          >
            Upload Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
