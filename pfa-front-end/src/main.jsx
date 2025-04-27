import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import WelcomePage from './Pages/welcomePage'
import NotFound from './Pages/NotFound'
<<<<<<< Updated upstream
=======
import Reserve from './Pages/Reserve'
import Login from './Pages/Login'
import Register from './Pages/register'
import DashboardPage from './Pages/Dashboard'
>>>>>>> Stashed changes


const router= createBrowserRouter([
  {
    path:"/",
    element: <WelcomePage/>
  },

  {
    path:"*",
    element:<NotFound/>
<<<<<<< Updated upstream
  }
=======
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
    path:"/Dashboard",
    element:<DashboardPage/>
  },
>>>>>>> Stashed changes

])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
