"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import loginItem from "../../../public/login/login-item.png";
import NLogo from "../../../public/login/N-logo.png";
import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { Button } from "../ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className=" min-h-screen bg-white">
      <div className="flex justify-center items-center">
        <div className="relative flex flex-col lg:flex-row w-11/12 md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-2xl overflow-hidden mt-10 gap-x-10">
          {/* left */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-sky-500 font-bold text-2xl pb-2">Log in</h2>
            <p className="text-gray-600 pb-6">Welcome back to your account</p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 pb-2">Email</label>
                <div className="relative">
                  <MdEmail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-300"
                    size={20}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 py-3 pl-10 pr-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 pb-2">Password</label>
                <div className="relative">
                  <FaLock
                    className="absolute text-sky-300 left-3 top-1/2 transform -translate-y-1/2 "
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 py-3 pl-10 pr-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 "
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-4 w-4" />
                    ) : (
                      <BsEye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </div>
              <div className="text-right mb-4">
                <Link
                  href="/forget-password"
                  className="text-sky-400 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-3 rounded-xl hover:bg-sky-600 transition duration-200"
              >
                Login
              </button>
              <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="px-3 text-gray-400">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <button className="w-full flex justify-center items-center bg-gray-100 py-3 rounded-xl border border-gray-300 hover:bg-gray-200 transition duration-200">
                <FcGoogle size={24} className="mr-2" /> Login with Google
              </button>
            </form>
          </div>

          <div className="bg-sky-200 w-1/7 left-[45%] top-8 z-30 h-auto rounded-[50%] absolute ">
            <Image src={NLogo} alt="N shape logo" className="w-auto " />
          </div>

          {/* right*/}
          <div className="hidden lg:flex w-1/2 bg-sky-300 justify-center items-center relative">
            <Image src={loginItem} alt="Login bg" className="w-auto " />
          </div>
        </div>
      </div>

      <div>
        <p className="text-center text-gray-600 my-10">
          Don’t have an account?{" "}
          <Link href="/register" className="text-sky-400 hover:underline">
            Register now!
          </Link>
        </p>
      </div>
    </section>
  );
}
