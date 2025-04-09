"use client";
import React from "react";
import { FileText, File } from "lucide-react"; // Assuming you're using lucide icons
import Image from "next/image";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const StatusTop = () => {
  const route = useRouter();
  return (
    <>
      <div className="mt-6">
        <button
          onClick={() => route.back()}
          className="text-[#238DB2] flex font-extrabold gap-x-1 p-4 cursor-pointer "
        >
          <IoReturnUpBackOutline className="w-5 h-5" />
          <span>Tickets Details</span>
        </button>
      </div>
      <div className="flex gap-5 mt-4 mx-8">
        {/* Status */}
        <div className="flex w-4/12 items-center  bg-[#2596af] text-white rounded-md overflow-hidden shadow-md ">
          <div className="bg-[#D6F4FF] px-3">
            <Image
              src={"/tickets/status.png"}
              width={60}
              height={60}
              alt={""}
              className="my-3 mx-2"
            />
          </div>

          <div className="p-3 ml-10">
            <h5 className=" font-semibold">Status</h5>
            <p className="">Pending</p>
          </div>
        </div>

        {/* Priority */}
        <div className="flex items-center bg-[#2596af] text-white rounded-md overflow-hidden shadow-md w-4/12">
          <div className="bg-[#D6F4FF] px-3">
            <Image
              src={"/tickets/status.png"}
              width={60}
              height={60}
              alt={""}
              className="my-3 mx-2"
            />
          </div>
          <div className="p-3 ml-10">
            <h5 className=" font-semibold">Priority</h5>
            <p className="text-sm">High</p>
          </div>
        </div>

        {/* Attachment */}
        <div className="flex items-center bg-[#2596af] text-white rounded-md overflow-hidden shadow-md w-4/12">
          <div className="bg-[#D6F4FF] px-3">
            <Image
              src={"/tickets/status.png"}
              width={60}
              height={60}
              alt={""}
              className="my-3 mx-2"
            />
          </div>
          <div className="p-3 ml-10">
            <h5 className=" font-semibold">Attachment</h5>
            <div className="flex gap-2 mt-1">
              <FileText className="w-8 h-8" />
              <File className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusTop;
