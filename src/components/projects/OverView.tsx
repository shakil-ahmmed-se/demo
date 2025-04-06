"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

export default function Overview() {
  // Stats data
  const stats = [
    { title: "Total Milestone", count: 5 },
    { title: "Total Task", count: 35 },
    { title: "Completed Task", count: 25 },
    { title: "Progressing Task", count: 5 },
  ];

  // User data - in a real app, this would likely come from props or API
  const teamMembers = [
    { name: "Deanna Jones", imageUrl: "/dashboard/profile.jpeg" },
    { name: "Alex Chen", imageUrl: "/dashboard/profile2.jpeg" },
    { name: "Sam Wilson", imageUrl: "/dashboard/profile3.jpeg" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">PROJECT OVERVIEW</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center w-full sm:w-[250px]"
          >
            <div className="bg-[#238DB2] text-white font-medium text-center px-4 py-2 rounded-md w-full mb-4">
              {stat.title}: {stat.count.toString().padStart(2, "0")}
            </div>

            <div className="space-y-2 w-full">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 border border-blue-300 rounded-md bg-blue-50"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">{member.name}</span>
                  </div>
                  <button className="text-blue-700 hover:text-blue-900">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-gray-500 hover:text-blue-600 text-sm underline">
          View All Details
        </button>
      </div>
    </div>
  );
}
