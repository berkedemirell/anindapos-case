import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const [users,setUsers] = useState([])

  
  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const fetchUsers = async() => {
      const res = await axios.get('http://localhost:3000/users')
      setUsers(res.data)
    };
    fetchUsers()
  }, [setUsers])

  const navigate = useNavigate()
    
  const selected = users.filter(
    (userr) => userr.username === loginInputs.username
  );


  const handleInputs = (e) => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault()
    if(loginInputs.username.length === 0 || loginInputs.password.length === 0) {
      setError("bütün boş alanları doldurun")
    }
    else if(loginInputs.username !== selected[0]?.username || loginInputs.password !== selected[0]?.password) {
      setError('kullanıcı adı veya şifre hatalı')
    } else {
      setUser(selected[0])
      navigate('/')
    }
    
  };
  return (
    <div className="flex flex-col items-center justify-start mt-12 h-screen">
      <div>
        <h1 className="text-3xl mb-2 underline">Giriş Yap</h1>
      </div>
      <div className="w-1/2 flex flex-col items-center p-12 gap-4 bg-slate-950 text-slate-50">
        <div className="flex flex-col w-1/3 gap-1">
          <label htmlFor="username" className="uppercase text-xs font-bold">
            username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="text-slate-950 bg-slate-50 rounded-md p-1"
            onChange={handleInputs}
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1">
          <label htmlFor="password" className="uppercase text-xs font-bold">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="text-slate-950 bg-slate-50 rounded-md p-1"
            onChange={handleInputs}
          />
        </div>
        <button
          className="bg-slate-50 text-slate-950 flex flex-col w-1/3 mt-1 p-1 font-bold rounded-md"
          onClick={handleLogin}
        >
          Giriş Yap
        </button>
        <div>
          <span>{error}</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
