'use client'
import TopProjectCards from "@/components/dashboard/TopProjectCard";
import ProjectTable from "@/components/projects/AllProject-2";
import TicketTable from "@/components/tickets/TicketTable";
import { useRouter } from "next/navigation";
import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";

const TicketsPage = () => {
  const route = useRouter()
  return (
    <div className=" flex-1 justify-center items-center w-full h-full ">
      <button onClick={()=> route.back()} className="text-[#238DB2] flex font-extrabold gap-x-1 p-4 cursor-pointer ">
        <IoReturnUpBackOutline className="w-5 h-5" />
        <span>Tickets</span>
      </button>
      <TopProjectCards />
      {/* <DataTableDemo/> */}
      <TicketTable title={"All Tickets"} />
    </div>
  );
};

export default TicketsPage;
