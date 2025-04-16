import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {

  const [user, setUser] = useState([])

  const [users,setUsers] = useState([])

  const [posts, setPosts] = useState([])

  useEffect(() => {
      const fetchPosts = async () => {
          const res = await axios.get("http://localhost:3000/posts")
           setPosts(res.data)
      };

      fetchPosts()
  }, [setPosts])

  useEffect(() => {
    const fetchUsers = async() => {
      const res = await axios.get('http://localhost:3000/users')
      setUsers(res.data)
    };
    fetchUsers()
  }, [setUsers])


  return (
    <UserContext.Provider value={{user, setUser, posts, setPosts, users}}>{children}</UserContext.Provider>
  )
}

export default UserContext;