import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";

const EditPage = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [editInputs, setEditInputs] = useState({
    id: path,
    title: "",
    content: "",
    writer: user.username,
  });

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:3000/posts/${path}`);
      setEditInputs({
        id: path,
        title: res.data.title,
        content: res.data.content,
        writer: user.username,
      });
    };

    fetchPost();
  }, [setEditInputs, path, user]);

  const handleInputs = (e) => {
    setEditInputs({ ...editInputs, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3000/posts/${path}`, editInputs)
  }

  return (
    <div className="flex items-start justify-center h-screen">
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
            value={editInputs.title}
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
            value={editInputs.content}
          />
        </div>
        <button className="bg-slate-950 w-1/2 rounded-md text-slate-50 p-2" onClick={handleUpdate}>
          Gönder
        </button>
      </div>
    </div>
  );
};

export default EditPage;
