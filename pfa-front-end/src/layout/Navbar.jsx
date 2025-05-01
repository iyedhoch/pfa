import {Users } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/PrimaryButton"

export default function Navbar(){

    return(
      <div className="container flex h-16 items-center justify-between top-4 py-4 px-11"><Link to={"/"}>
      <div className="flex items-center gap-2">
        
          <Users className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold">CoSpace</span>
        
      </div></Link> 
      <nav className="flex items-center gap-4">
        <Link to="/login" className="text-sm font-medium hover:underline">
          Login
        </Link>
        <Button variant="secondary">
          <Link to="/register">Register</Link>
        </Button>
      </nav>
    </div>
    

    )

}