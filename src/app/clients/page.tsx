'use client'

import ClientTable from "@/components/clients/ClientTable";
import TopProjectCards from "@/components/dashboard/TopProjectCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function ClientPage() {
  const route = useRouter();
  return (
    <div className="flex-1 justify-center items-center h-full    overflow-x-hidden">
      <button
        onClick={() => route.back()}
        className="text-[#238DB2] flex font-extrabold gap-x-1 mx-6 mt-5 cursor-pointer"
      >
        <IoReturnUpBackOutline className="w-5 h-5" />
        <span>Clients</span>
      </button>
      <TopProjectCards />
      <ClientTable />
    </div>
  );
}
