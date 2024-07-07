'use client';

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { db, storage } from "../../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

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

  const handleContentChange = (value) => {
    setBlogData({ ...blogData, content: value });
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
          <ReactQuill
            value={blogData.content}
            onChange={handleContentChange}
            className="border rounded-md w-full bg-gray-700 text-white"
            theme="snow"
            modules={{
              toolbar: {
                container: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["bold", "italic", "underline"],
                  [{ color: [] }, { background: [] }],
                  [{ align: [] }],
                  ["link", "image"],
                ],
              },
            }}
            formats={[
              "header",
              "font",
              "size",
              "bold",
              "italic",
              "underline",
              "list",
              "bullet",
              "align",
              "color",
              "background",
              "link",
              "image",
            ]}
            placeholder="Write something amazing..."
            style={{ color: "black", backgroundColor: "white" }}
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
          <label className="block text-white font-semibold mb-2">Blog Image</label>
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
            ** Please click only once the Upload Button and wait for alert
            message, don't press multiple times, it will lead to store multiple
            responses for same above data.
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
