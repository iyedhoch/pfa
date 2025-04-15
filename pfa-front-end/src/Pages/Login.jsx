import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { useState } from "react";
import { LoadingSpinner } from "../components/Loading";

export default function Login(){
    const [isLoading,setIsLoading]=useState(true);

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