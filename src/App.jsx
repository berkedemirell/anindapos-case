import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import SinglePost from './pages/SinglePost'
import CreatePost from './pages/CreatePost'
import EditPage from './pages/EditPage'

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/giris",
          element: <Login/>
        },
        {
          path: "/kayit",
          element: <Register/>
        },
        {
          path:"/gönderi/:id",
          element: <SinglePost/>
        },
        {
          path:"/gönderi",
          element: <CreatePost/>
        },
        {
          path: "/editpost/:id",
          element: <EditPage/>
        }

      ]
    }
  ])


  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
