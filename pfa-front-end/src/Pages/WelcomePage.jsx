"use client"

import Navbar from "../layout/Navbar"
import Button from "../components/PrimaryButton"
import { LoadingSpinner } from "../components/Loading"
import { useState } from "react"
import { Calendar, Coffee, Monitor, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Footer from "../layout/Footer"
function WelcomePage() {
  const [isLoading, setIsLoading] = useState(false)

  const heroRef = useRef(null)
  const spacesRef = useRef(null)
  const amenitiesRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const isSpacesInView = useInView(spacesRef, { once: false, amount: 0.3 })
  const isAmenitiesInView = useInView(amenitiesRef, { once: false, amount: 0.3 })

  // Scroll down animation function
  const scrollToSpaces = () => {
    document.getElementById("spaces-section").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <LoadingSpinner show={isLoading} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-rose-50">
            <motion.div
              className="container px-4 md:px-6"
              ref={heroRef}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            >
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
                    <Link to="/reserve">Reserve a Room</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
                <motion.div
                  className="absolute bottom-8 cursor-pointer"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  onClick={scrollToSpaces}
                >
                  <div className="flex flex-col items-center text-gray-500">
                    <p className="text-sm mb-2">Scroll Down</p>
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
                      className="animate-bounce"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>
          <section id="spaces-section" className="w-full py-12 md:py-24 lg:py-32">
            <motion.div
              className="container px-4 md:px-6"
              ref={spacesRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isSpacesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
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
            </motion.div>
          </section>
          <motion.section
            className="w-full py-12 md:py-24 lg:py-32 bg-rose-50"
            ref={amenitiesRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isAmenitiesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="container px-4 md:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
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
                    <CardFooter className="text-center text-sm text-gray-500">
                      Premium coffee and refreshments
                    </CardFooter>
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
            </motion.div>
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default WelcomePage
