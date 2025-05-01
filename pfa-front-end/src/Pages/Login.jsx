import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { useState } from "react";
import { LoadingSpinner } from "../components/Loading";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import Button from "../components/PrimaryButton"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Login(){
    const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:8080/api/users/login", loginData);
      const { role, token, userId } = res.data;

      // Store the token and userId
      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", userId);

      toast.success("Login successful!", { autoClose: 1500 });

      // Redirect based on role
      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 1800);

    } catch (error) {
      const errorMsg = error.response?.data?.error || "Login failed. Please try again.";
      toast.error(errorMsg, { autoClose: 3000 });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <LoadingSpinner show={isLoading}/>
      <ToastContainer />
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Link to="/" className="absolute left-4 top-4 text-sm text-rose-500 hover:underline">
          ← Back to home
        </Link>

        <div className="mx-auto w-full sm:w-[350px]">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to log in
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-rose-500 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button disabled={isLoading} type="submit" className="w-full">
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
            </CardContent>

            <CardFooter className="text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-rose-500 hover:underline">Sign up</Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}