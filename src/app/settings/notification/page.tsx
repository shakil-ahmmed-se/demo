'use client'

import Settings from "@/components/team/Settings";
import { useRouter } from "next/navigation";
import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";

const NotificationPage = () => {

    const route = useRouter()

  return (
    <div className="">
      <button
        onClick={() => route.back()}
        className="text-[#238DB2] flex font-extrabold gap-x-1 mt-5  mx-6 mb-8 cursor-pointer"
      >
        <IoReturnUpBackOutline
         className="w-5 h-5" />
        <span>Settings {"<"} Notifications</span>
      </button>
      <Settings />
    </div>
  );
};

export default NotificationPage;
