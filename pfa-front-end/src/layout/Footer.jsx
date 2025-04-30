import { Link } from "react-router-dom";

export default function Footer(){
    return<>
    <div className="border-t bg-gray-50 px-11">
        <div className="container flex flex-col gap-2 py-10 md:flex-row md:gap-4 md:py-6">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 CoSpace. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 md:justify-end md:flex-1">
            <Link href="#" className="text-sm font-medium hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
}