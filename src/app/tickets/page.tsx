import TopProjectCards from "@/components/dashboard/TopProjectCard";
import ProjectTable from "@/components/projects/AllProject-2";
import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";

const TicketsPage = () => {
  return (
    <div className=" flex-1 justify-center items-center w-full h-full ">
      <div className="text-[#238DB2] flex font-extrabold gap-x-1">
        <IoReturnUpBackOutline className="w-5 h-5" />
        <span>Tickets</span>
      </div>
      <TopProjectCards />
      {/* <DataTableDemo/> */}
      <ProjectTable title={"All Tickets"} />
    </div>
  );
};

export default TicketsPage;
