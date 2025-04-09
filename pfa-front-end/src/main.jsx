import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import WelcomePage from './Pages/welcomePage'
import NotFound from './Pages/NotFound'


const router= createBrowserRouter([
  {
    path:"/",
    element: <WelcomePage/>
  },

  {
    path:"*",
    element:<NotFound/>
  }

])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
