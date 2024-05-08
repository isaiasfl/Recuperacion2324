import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { useEffect, useState } from "react"
import comprobarToken from './helpers/comprobarToken'
import Login from './Pages/Login'
import About from './Pages/About'
import Inicio from './Pages/Inicio'


function App() {


const [token, setToken] = useState("")
const router = createBrowserRouter([


  { path: `/`,
  element: <Navigate to='/login' />,

  },

  { path: '/login',
    element: <Login token ={token} setToken={setToken}></Login>
  },
  
  { path: '/about',
   
    element: <About token ={token}></About>
  },
  
  { path: '/inicio',
  element: <Inicio token ={token} setToken = {setToken}></Inicio>
  }
])

useEffect(() => {
  
setToken(comprobarToken());
}, [])




  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
