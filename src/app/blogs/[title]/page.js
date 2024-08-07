"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '../../../../firebase'; // Adjust the import path based on your project structure
import { collection, getDocs, query, where } from 'firebase/firestore';
import Image from 'next/image';
import dynamic from 'next/dynamic';
//import styles from './blogContent.module.css';
import 'suneditor/dist/css/suneditor.min.css'; // Default SunEditor styles
 import './blogContent.css'// Custom SunEditor styles
import Link from 'next/link';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function BlogPostPage() {
  const { title } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const decodedTitle = decodeURIComponent(title);
        const q = query(collection(db, 'blogs'), where('slug', '==', decodedTitle));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const blogData = querySnapshot.docs[0].data();
          setPost({ ...blogData });
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Error fetching blog post: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [title]);

  if (loading) {
    return <div className=' text-center text-white my-5'>Loading...</div>;
  }

  if (!post) {
    return <div className="text-center text-red-500 my-5">
    Blog post not found or deleted - Please check the URL is valid or not else &nbsp;
    <span className='text-blue-600 italic'>
    <Link href="/blogs" legacyBehavior>
      GO BACK
    </Link>
    </span>
     
  </div>
  }

  return (
    <div className='m-5 mt-20'>
      <div className="relative w-full h-64 md:h-96">
        <Image
          className="rounded-t-lg object-cover"
          src={post.blogImageUrl}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          priority={true}
        />
      </div>
      <h1 className='text-center my-10 text-3xl uppercase text-white font-bold'>{post.title}</h1>
      <hr/>
      <div className={`blog-content my-5 text-justify`}>
        <SunEditor
          setContents={post.content}
          disable={true} // Make the editor read-only
          hideToolbar={true} // Hide the toolbar
          readOnly={true} // Ensure the editor is not editable
          height="auto" // Adjust the height based on content
          setOptions={{
            resizingBar: false, // Hide the resizing bar
            showPathLabel: false, // Hide the path label
          }}
        />
      </div>
      <p className='text-sm text-gray-400 mb-5 mt-10 text-end pr-5'><em>By <b className='font-bold text-gray-300 italic'>{post.author}</b> on {post.date}</em></p>
      <hr className='border border-gray-500' />
    </div>
  );
}
