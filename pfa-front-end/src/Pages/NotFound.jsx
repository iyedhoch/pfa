import { ArrowLeft, FolderX } from "lucide-react"

import  Button  from "../components/PrimaryButton"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="container flex max-w-md flex-col items-center justify-center gap-6 text-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-rose-50">
          <FolderX className="h-20 w-20 text-rose-500" />
          <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-500 text-white text-2xl font-bold">
            404
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Page not found</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back home
            </Link>
          </Button>
          <button>
            <Link href="/dashboard">View dashboard</Link>
          </button>
        </div>
      </div>
    </div>
  )
}