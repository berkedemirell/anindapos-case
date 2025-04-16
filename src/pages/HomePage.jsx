import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import UserContext from "../context/UserContext";
import axios from "axios";

const HomePage = () => {
  const { posts, user } = useContext(UserContext);

  const navigate = useNavigate()

  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3000/posts/${e.target.id}`)
    navigate('/')
  };    

  return (
    <div className="mt-4">
      <h1 className="text-center mb-4 text-2xl font-bold">Blog Gönderileri</h1>
      <div className="flex flex-col items-center">
        {posts?.map((post, index) => {
          return (
            <div
              className="flex flex-row items-center justify-start gap-12 border-2 rounded-md mb-2 w-1/2 pl-4 pr-4 p-2 text-lg"
              key={post.id}
              to={`/gönderi/${post.id}`}
            >
              <div>{index + 1}.</div>
              <div>
                <p>{post.writer}</p>
              </div>
              <div>
                <p>{post.title}</p>
              </div>
              <div>
                <p>{post.content.slice(0, 25)}...</p>
              </div>
              <Link
                to={`/gönderi/${post.id}`}
                id={post.id}
                className="text-red-950"
              >
                <FaArrowRightLong />
              </Link>
              {user.username === post.writer && (
                <button className="text-green-950 text-sm underline">
                  Update
                </button>
              )}
              {user.username === post.writer && (
                <Link id={post.id} className="text-red-950 font-bold" onClick={handleDelete}>
                  X
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
