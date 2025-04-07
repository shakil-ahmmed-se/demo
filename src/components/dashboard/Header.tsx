"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../../public/login/logo.png";
import { IoMdLogOut } from "react-icons/io";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-6 py-6 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-xl font-semibold">
        <Image src={logo} alt="CodenVibe" className="h-8 w-auto" />
        {/* <h3 className="text-black">CODENVIBE</h3> */}
      </div>

      <div className="flex space-x-4">
        <div className="lg:md:flex space-x-6 my-auto mr-10">
          <Image
            src={"/dashboard/profile.jpeg"}
            alt="profile image"
            width={50}
            height={50}
            className="rounded-full w-10 h-10"
          />
          <div >
            <span className="font-bold">Monica Doe</span>
            <div className="text-gray-500">Admin</div>
          </div>
        </div>

        <button
          
          className=" cursor-pointer bg-transparent text-black"
        >
         <IoMdLogOut className="w-8 h-7" size={16} />
        </button>
      
      </div>
    </nav>
  );
}
