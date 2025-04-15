import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import WelcomePage from './Pages/WelcomePage'
import NotFound from './Pages/NotFound'
import Reserve from './Pages/Reserve'
import Login from './Pages/login'
import Register from './Pages/register'


const router= createBrowserRouter([
  {
    path:"/",
    element: <WelcomePage/>
  },

  {
    path:"*",
    element:<NotFound/>
  },
  {
    path:"/reserve",
    element:<Reserve/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },

])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
