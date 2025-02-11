
"use client"

import BlogCard from '@/components/ui/BlogCard';
import Spinner from '@/components/ui/Spinner';
import { useGetBlogsQuery } from '@/redux/apis/blogs.slice';
import { Blog } from '@/types';
import React from 'react';

// export const metadata = {
//     title: "NexaBlog | Blogs"
// }

const BlogsPage = () => {

    // const res = await fetch("http://localhost:5000/blogs", {
    //     cache: 'no-store'
    // });
    // const blogs = await res.json();

    const { data: blogs, isLoading } = useGetBlogsQuery(undefined);

    // console.log(data)
    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='my-10 w-[90%] mx-auto'>
            <h1 className='text-center'>This is blogs page</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    blogs?.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default BlogsPage;