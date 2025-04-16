
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]


    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://localhost:3000/posts/${path}`)
             setPost(res.data)
        };

        fetchPost()
    }, [setPost, path])
  return (
    <div className='min-h-screen'>
        <div className='pl-40 pr-40 p-12'>
            <div>
                <p className='text-3xl'>{post.title}</p>
            </div>
            <div>
                <p className='-mt-1 text-lg'>{post.writer}</p>
            </div>
            <div>
                <p className='text-xl'>{post.content}</p>
            </div>
        </div>
    </div>
  )
}

export default SinglePost