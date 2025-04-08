"use client";

// components/ProjectOverview.tsx
import React from "react";
import Image from "next/image";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

interface TeamMember {
  name: string;
  image: string;
}


interface ProjectOverviewProps {
  projectName: string;
  workingProgress: number;
  paymentProgress: number;
  paymentAmount: string;
  totalMembers: number;
  teamMembers: TeamMember[];
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  projectName,
  workingProgress,
  paymentProgress,
  paymentAmount,
  totalMembers,
  teamMembers,
}) => {
  const workingData = [
    { name: "Progress", value: workingProgress, fill: "#238DB2" },
    { name: "Remaining", value: 100 - workingProgress, fill: "#E5E7EB" },
  ];

  const paymentData = [
    { name: "Progress", value: paymentProgress, fill: "#238DB2" },
    { name: "Remaining", value: 100 - paymentProgress, fill: "#E5E7EB" },
  ];

  return (
    <div>
      <div className="p-6 bg-white rounded-lg shadow-md border mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Project Overview
          </h2>
          <Link href={'/projects'}>
          <button className="px-4 py-2 bg-[#238DB2] text-white rounded-md hover:bg-blue-400 cursor-pointer">
            View All
          </button>
          </Link>
        </div>

        <div className="mb-6">
          <select className="w-1/3 p-2 border rounded-md text-gray-700">
            <option>{projectName}</option>
          </select>
        </div>

        <div className="flex md:grid-cols-3 gap-2 mb-6">
          <div className="flex flex-col w-3/12 items-center p-4 border rounded-md">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Working Progress
            </h3>
            <div className="relative w-32 h-32">
              <RadialBarChart
                width={128}
                height={128}
                innerRadius="70%"
                outerRadius="90%"
                barSize={20}
                data={workingData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise={true}
                  dataKey="value"
                />
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
              </RadialBarChart>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-800">
                  {workingProgress}%
                </span>
              </div>
            </div>
            <Link href={'/projects'}>
            <button className="mt-4 text-[#238DB2] hover:underline cursor-pointer">
              View Details
            </button>
            </Link>
          </div>

          <div className="flex flex-col w-3/12 items-center justify-center p-4 border rounded-md">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Payment</h3>
            <div className="relative w-32 h-32">
              <RadialBarChart
                width={128}
                height={128}
                innerRadius="70%"
                outerRadius="90%"
                barSize={20}
                data={paymentData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise={true}
                  dataKey="value"
                />
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
              </RadialBarChart>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-800">
                  {paymentProgress}%
                </span>
              </div>
              <div
                className="absolute bg-[#238DB2] text-white text-xs font-medium px-2 py-1 rounded-full"
                style={{
                  left: "50%",
                  top: "-10px",
                  transform: "translateX(-50%)",
                }}
              >
                {paymentAmount}
              </div>
            </div>
           <Link href={'/billing'}>
           <button className="mt-4 text-[#238DB2] hover:underline cursor-pointer">
              View Details
            </button>
           </Link>
          </div>

          <div className="p-4 border rounded-md w-8/12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-700">
                Total Assigned Member ({totalMembers})
              </h3>
              <Link href={'/team'}>
              <button className="text-[#238DB2] hover:underline cursor-pointer">
                View All
              </button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 bg-blue-50 rounded-md"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={40}
                    height={40}
                    className="rounded mr-2"
                  />
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium text-sm">
                      {member.name}
                    </p>
                  </div>
                  <button className="text-[#238DB2]">
                    <MdEmail className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
