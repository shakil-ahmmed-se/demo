"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../../public/login/logo.png";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-6 py-6 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-xl font-semibold">
        <Image src={logo} alt="CodenVibe" className="h-8 w-auto"/>
        {/* <h3 className="text-black">CODENVIBE</h3> */}
      </div>

      <div className="flex space-x-4">
        <div className="lg:md:flex space-x-6 my-auto mr-10">
          <Link
            href="/contact"
            className="text-black font-medium "
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-black font-medium"
          >
            About Us
          </Link>
        </div>

        <Button variant="default" className="bg-[#238DB2] hover:bg-sky-500 cursor-pointer">
          Login
        </Button>
        <Button
          variant="outline"
          className="border-[#238DB2] text-[#238DB2] hover:bg-blue-100 cursor-pointer"
        >
          Register
        </Button>
      </div>
    </nav>
  );
}
