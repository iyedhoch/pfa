import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import WelcomePage from './Pages/WelcomePage'
import NotFound from './Pages/NotFound'
import Reserve from './Pages/Reserve'
import Login from './Pages/Login'
import Register from './Pages/Register'
import DashboardPage from './Pages/Dashboard'
import Admin from './Pages/Admin'


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
  {
    path:"/dashboard",
    element:<DashboardPage/>
  },
  {
    path:"/admin",
    element:<Admin/>
  },


])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)