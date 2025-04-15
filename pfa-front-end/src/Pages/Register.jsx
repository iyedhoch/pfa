import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";

export default function Register(){
    return(
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link to={"/"} className="absolute left-4 top-4 md:left-8 md:top-8 inline-flex items-center justify-center text-sm font-medium">
                ← Back to home
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Create an account</CardTitle>
                    <CardDescription className="text-center">Enter your information to create an account</CardDescription>
                </CardHeader>
                <CardContent>

                </CardContent>
                <CardFooter className="flex flex-col">
                    <div className="text-sm text-center text-gray-500">
                        Already have an account?{" "}
                        <Link to="/login" className="text-rose-500 hover:underline">
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
                </Card>
            </div>
        </div>
    )
}