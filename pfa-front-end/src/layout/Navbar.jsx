import {Users } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/PrimaryButton"

export default function Navbar(){

    return(
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">CoSpace</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline">
              Login
            </Link>
            <Button variant="secondary">
              <Link href="/register">Register</Link>
            </Button>
          </nav>
        </div>

    )

}