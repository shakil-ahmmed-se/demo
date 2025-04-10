"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoReturnUpBackOutline } from "react-icons/io5";

const SettingPage = () => {
  const route = useRouter();
  return (
    <div className="mt-7">
      <button
        onClick={() => route.back()}
        className="text-[#238DB2] flex font-extrabold gap-x-1   mx-6 mb-8 cursor-pointer"
      >
        <IoReturnUpBackOutline className="w-5 h-5" />
        <span>Settings</span>
      </button>
      <div className="flex flex-col w-full gap-y-5">
        <div className="w-full">
          <Link href={"/settings/role"}>
            <button className="bg-white flex justify-between items-center py-6 px-8 shadow-2xl drop-shadow-2xl w-10/12  mx-7 rounded-3xl cursor-pointer ">
              <h4 className="text-2xl">Role & Permission</h4>
              <div>
                <IoIosArrowForward />
              </div>
            </button>
          </Link>
        </div>
        <div className="w-full">
          <Link href={'/settings/notification'}>
            <button className="bg-white flex justify-between items-center py-6 px-8 shadow-2xl drop-shadow-2xl w-10/12  mx-7 rounded-3xl cursor-pointer ">
              <h4 className="text-2xl">Notification</h4>
              <div>
                <IoIosArrowForward />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
