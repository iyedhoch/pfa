import Navbar from "../layout/Navbar"
import Button from "../components/PrimaryButton"
import { Mail, ArrowRight } from "lucide-react"
import { LoadingSpinner } from "../components/Loading"
import { useState } from "react"

function WelcomePage() {
  const [isLoading,setIsLoading]=useState(true);
  return <>
    <Navbar/>
    <LoadingSpinner  show={isLoading}/>
    <Button>Click me</Button>
      <Button variant="soft">Secondary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button isLoading>Processing</Button>
      <Button leftIcon={<Mail />}>Email</Button>
      <Button rightIcon={<ArrowRight />}>Next</Button>
  </>
}

export default WelcomePage
