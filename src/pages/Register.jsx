import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import axios from 'axios'

const Register = () => {

  const {users} = useContext(UserContext)

  const [registerInputs, setRegisterInputs] = useState({
    id: String(Number(users.length) + 1),
    email: '',
    username: '',
    password: ''
  })

  const handleInputs = (e) => {
    setRegisterInputs({...registerInputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {
    await axios.post('http://localhost:3000/users', registerInputs)
  }


  return (
    <div className="flex flex-col items-center justify-start mt-12 h-screen">
      <div>
        <h1 className="text-3xl mb-2 underline">Kayıt Ol</h1>
      </div>
      <div className="w-1/2 flex flex-col items-center p-12 gap-4 bg-slate-950 text-slate-50">
        <div className="flex flex-col w-1/3 gap-1">
          <label htmlFor="email" className="uppercase text-xs font-bold">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="text-slate-950 bg-slate-50 rounded-md p-1"
            onChange={handleInputs}
          />
        </div>
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
        <button className="bg-slate-50 text-slate-950 flex flex-col w-1/3 mt-1 p-1 font-bold rounded-md" onClick={handleSubmit}>Kayıt Ol</button>
      </div>
    </div>
  )
}

export default Register