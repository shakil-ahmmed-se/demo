'use client'
import TopProjectCards from "@/components/dashboard/TopProjectCard";
import TeamMemberTable from "@/components/team/TeamMemberTable";
import { useRouter } from "next/navigation";
import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function TeamPage() {
  const route = useRouter();
  return (
    <div className="flex-1 justify-center items-center w-full h-full overflow-x-hidden scrollbar-hide">
      <button
        onClick={() => route.back()}
        className="text-[#238DB2] flex font-extrabold gap-x-1 mx-6 mt-5 cursor-pointer"
      >
        <IoReturnUpBackOutline className="w-5 h-5" />
        <span>Team</span>
      </button>
      <TopProjectCards />
      <TeamMemberTable />
    </div>
  );
}
