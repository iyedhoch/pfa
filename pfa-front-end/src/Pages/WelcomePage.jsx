import Navbar from "../layout/Navbar"
import Button from "../components/PrimaryButton"
import { LoadingSpinner } from "../components/Loading"
import { useState } from "react"
import { ArrowRight, Calendar, Coffee, Monitor, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
function WelcomePage() {
  const [isLoading,setIsLoading]=useState(false);

  const ref =useRef(null);
  const isInView=useInView(ref,{once:true});
  
  return <>
    
    <LoadingSpinner  show={isLoading}/>
    <div className="flex flex-col min-h-screen">
    <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-rose-50">
          <motion.div className="container px-4 md:px-6" ref={ref}
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Your Perfect Workspace Awaits
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Book meeting rooms, desks, and collaborative spaces with just a few clicks. Enjoy premium amenities
                  and a productive environment.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" variant="secondary">
                  <Link to="/reserve">
                    Reserve a Room 
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Spaces</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Choose from a variety of rooms and spaces designed for productivity and collaboration.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Meeting Rooms</CardTitle>
                    <CardDescription>Perfect for team meetings and client presentations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative overflow-hidden rounded-lg bg-rose-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Users className="h-12 w-12 text-rose-500" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <Users className="mr-1 h-4 w-4" />
                      <span>Capacity: 4-12 people</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/reserve?type=meeting">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Private Offices</CardTitle>
                    <CardDescription>Quiet spaces for focused work</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative overflow-hidden rounded-lg bg-rose-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Monitor className="h-12 w-12 text-rose-500" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <Users className="mr-1 h-4 w-4" />
                      <span>Capacity: 1-4 people</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/reserve?type=office">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Event Spaces</CardTitle>
                    <CardDescription>Host workshops, seminars, and networking events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative overflow-hidden rounded-lg bg-rose-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Calendar className="h-12 w-12 text-rose-500" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <Users className="mr-1 h-4 w-4" />
                      <span>Capacity: Up to 50 people</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Link to="/reserve?type=event">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <motion.section className="w-full py-12 md:py-24 lg:py-32 bg-rose-50" ref={ref}
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Premium Amenities</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Enhance your workspace experience with our premium amenities.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center">Whiteboard</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center pb-2">
                    <div className="rounded-full bg-rose-100 p-4">
                      <Monitor className="h-6 w-6 text-rose-500" />
                    </div>
                  </CardContent>
                  <CardFooter className="text-center text-sm text-gray-500">
                    Interactive whiteboards for brainstorming
                  </CardFooter>
                </Card>
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center">Datashow</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center pb-2">
                    <div className="rounded-full bg-rose-100 p-4">
                      <Monitor className="h-6 w-6 text-rose-500" />
                    </div>
                  </CardContent>
                  <CardFooter className="text-center text-sm text-gray-500">
                    High-quality projectors for presentations
                  </CardFooter>
                </Card>
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center">Coffee Service</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center pb-2">
                    <div className="rounded-full bg-rose-100 p-4">
                      <Coffee className="h-6 w-6 text-rose-500" />
                    </div>
                  </CardContent>
                  <CardFooter className="text-center text-sm text-gray-500">Premium coffee and refreshments</CardFooter>
                </Card>
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center">High-Speed WiFi</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center pb-2">
                    <div className="rounded-full bg-rose-100 p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-rose-500"
                      >
                        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                        <line x1="12" y1="20" x2="12" y2="20" />
                      </svg>
                    </div>
                  </CardContent>
                  <CardFooter className="text-center text-sm text-gray-500">
                    Fast and reliable internet connection
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="border-t bg-gray-50 px-11">
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
      </footer>
    </div>
    
  </>
}

export default WelcomePage
