import ClientTable from "@/components/clients/ClientTable";
import TopProjectCards from "@/components/dashboard/TopProjectCard";
import Link from "next/link";
import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function ClientPage() {
  return (
    <div className="flex-1 justify-center items-center w-full h-full">
      <Link
        href={"/"}
        className="text-[#238DB2] flex font-extrabold gap-x-1 mx-6 mt-5"
      >
        <IoReturnUpBackOutline className="w-5 h-5" />
        <span>Clients</span>
      </Link>
      <TopProjectCards />
      <ClientTable />
    </div>
  );
}
