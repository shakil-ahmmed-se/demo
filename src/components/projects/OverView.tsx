"use client";

import Image from "next/image";
import React from "react";
import { Eye } from "lucide-react"; // icon library - install lucide-react if needed

type StatCardProps = {
  title: string;
  count: number;
};

type UserCardProps = {
  name: string;
  imageUrl: string;
};

const users: UserCardProps[] = [
  {
    name: "Deanna Jones",
    imageUrl: "/dashboard/profile.jpeg",
  },
  {
    name: "Deanna Jones",
    imageUrl: "/dashboard/profile.jpeg",
  },
  {
    name: "Deanna Jones",
    imageUrl: "/dashboard/profile.jpeg",
  },
];

const StatCard = ({ title, count }: StatCardProps) => (
  <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center w-full sm:w-[250px]">
    <div className="bg-[#238DB2] text-white font-medium text-center px-4 py-2 rounded-md w-full mb-4">
      {title} : {count.toString().padStart(2, "0")}
    </div>

    <div className="space-y-2 w-full">
      {users.map((user, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between p-2 border border-blue-300 rounded-md bg-blue-50"
        >
          <div className="flex items-center gap-2">
            <Image
              src={user.imageUrl}
              alt={user.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-medium">{user.name}</span>
          </div>
          <div className="flex items-center gap-1 text-blue-700">
            <Eye className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Overview = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">OVERVIEW</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <StatCard title="Total Milestone" count={5} />
        <StatCard title="Total Task" count={35} />
        <StatCard title="Completed Task" count={25} />
        <StatCard title="Progressing Task" count={5} />
      </div>

      <div className="text-center mt-6">
        <button className="text-gray-500 hover:text-blue-600 text-sm underline">
          View All
        </button>
      </div>
    </div>
  );
};

export default Overview;
