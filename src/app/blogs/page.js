"use client";

import { useEffect, useState } from 'react';
import { db } from '../../../firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

const stripHtmlTags = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blog');
        const blogsSnapshot = await getDocs(blogsCollection);
        const blogsList = blogsSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        });
        setBlogs(blogsList);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);
 
  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex flex-wrap -mx-2">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 ">
            <div className="bg-white p-2 shadow-lg rounded-lg h-full flex flex-col cursor-pointer my-1">
              <Link href={`/blogs/${blog.slug}`} legacyBehavior>
                <a className="block">
                  <div className='relative max-h-[180px] h-[180px] mb-4'>
                    <Image 
                      className="rounded-t-lg object-cover" 
                      src={blog.blogImageUrl} 
                      alt={blog.title} 
                      width={600} 
                      height={400} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="px-4 flex-1 flex flex-col">
                    <h2 className="text-xl font-bold mb-2 text-gray-700 truncate">{blog.title}</h2>
                    <p className="text-gray-700 text-sm mb-2">By <b className='font-bold text-gray-500 italic'>{blog.author}</b> on {blog.date}</p>
                    <hr className="my-2"/>
                    <p className="text-gray-600 text-sm flex-1 overflow-hidden">{stripHtmlTags(blog.content).slice(0, 100)}...</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
