"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../../public/login/logo.png";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center mt-0 px-6 py-8 bg-gray-200">

      <div className="text-xl font-semibold">
        <Image
          className="h-7 w-auto"
          src={logo}
          alt="Codenvibe Logo"
        />
      </div>
      

      <div className="hidden md:flex space-x-10">
        <Link href="/contact" className="text-black font-medium hover:underline">
          Location <br />
          Street 23, NY
        </Link>
        <Link href="/about" className="text-black font-medium hover:underline">
          Email <br />
          codenvibe@gmail.com
        </Link>
      </div>
      
      <div className="flex space-x-4">
        <Link href={"/privacy"}>
        Privacy Policy
        </Link>
        <Link href={"/terms"}>
        Terms of Service
        </Link>
      </div>
    </footer>
  );
}
