import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { user, posts } = useContext(UserContext);

  const navigate = useNavigate()

  const [postInputs, setPostInputs] = useState({
    id: Number(posts.length) + 1,
    title: "",
    content: "",
    writer: user.username,
  });

  const handleInputs = (e) => {
    setPostInputs({ ...postInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:3000/posts", postInputs);
    navigate('/')
  };

  console.log(postInputs);
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-1/2 gap-2 mt-12">
        <div className="flex flex-col w-1/2">
          <label htmlFor="title" className="capitalize font-bold">
            başlık
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-slate-500 rounded-md p-1"
            onChange={handleInputs}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="content" className="capitalize font-bold">
            İçerik
          </label>
          <textarea
            type="textarea"
            name="content"
            id="content"
            className="border border-slate-500 rounded-md h-44 p-1"
            onChange={handleInputs}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-slate-950 w-1/2 rounded-md text-slate-50 p-1"
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
