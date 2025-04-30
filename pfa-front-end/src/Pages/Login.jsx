import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { useState } from "react";
import { LoadingSpinner } from "../components/Loading";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import Button from "../components/PrimaryButton"
import { Eye, EyeOff, Loader2 } from "lucide-react"
export default function Login(){
    const [isLoading,setIsLoading]=useState(true);
    const [showPassword, setShowPassword] = useState(false)
    setTimeout(()=>{
        setIsLoading(false)
    },3000);
    return<>
        <LoadingSpinner show={isLoading}/>
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link to={"/"} className="absolute left-4 top-4 md:left-8 md:top-8 inline-flex items-center justify-center text-sm font-medium">
                ← Back to home
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Sign in</CardTitle>
                    <CardDescription className="text-center">
                    Enter your email and password to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={"handleSubmit"}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-rose-500 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <Button disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>
            </form>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>
           
          </CardContent>
                <CardFooter className="flex flex-col">
                    <div className="text-sm text-center text-gray-500">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-rose-500 hover:underline">
                        Sign up
                    </Link>
                    </div>
                </CardFooter>
                </Card>
            </div>
        </div>
    </>
}