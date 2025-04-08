"use client";

import Settings from "@/components/team/Settings";
import TeamOverView from "@/components/team/TeamOverView";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { TbEdit } from "react-icons/tb";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  paymentStatus: "Pending" | "Paid";
  lastActivity: string;
}

// Sample data (to be replaced with API data)
const initialTeamMemberData: TeamMember[] = [
  {
    id: 1,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Paid",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
  {
    id: 2,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Pending",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
  {
    id: 3,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Paid",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
  {
    id: 4,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Pending",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
  {
    id: 5,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Paid",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
];

const TeamDetails = () => {
  const teamId = Number(useParams().teamId);
  console.log("team id", teamId);
  const teamMembers = initialTeamMemberData.filter(
    (member) => member.id === teamId
  );
  console.log(teamMembers);

  return (
    <div>
      <div>
        {teamMembers.map((team) => (
          <>
            <div key={team.id} className="flex  items-center gap-x-2 m-3">
              <Image
                src={"/dashboard/profile.jpeg"}
                alt={team.name}
                width={40}
                height={40}
                className="rounded-full mr-4 w-14 h-14"
              />
              <h3 className="text-xl font-bold">{team.name}</h3>
            </div>

            {/* profile info div */}

            <div className="flex justify-between  bg-white shadow drop-shadow-2xl rounded-2xl p-10 mx-10 ">
              <div>
                <h4 className="text-lg font-bold"> Personal information</h4>
                <div className=" space-y-5">
                  <div className="mt-5">
                    <span className="text-gray-500">Name </span> <br />
                    <span>{team.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Deparment</span> <br />
                    <span>{team.department}</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>Date</span>
                  <br />
                  <span className="text-gray-500">02-04-2025</span>
                </div>
                <div className="mt-5">
                  <span className="text-gray-500"> Completed Task </span>
                  <br />
                  <span>{22}</span>
                </div>
              </div>
              <div className="">
                <button className=" bg-[#238DB2] px-3 py-2 flex items-center gap-x-1 text-white rounded-md">
                  <TbEdit />
                  Edit
                </button>
              </div>
            </div>

            {/* Work Information */}
            <div className="flex justify-between  bg-white shadow drop-shadow-2xl rounded-2xl p-10 mx-10 mt-10">
              <div>
                <h4 className="text-lg font-bold"> Work information</h4>
                <div className=" space-y-5">
                  <div className="mt-5">
                    <span className="text-gray-500">Role </span> <br />
                    <span>{team.role}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Deparment</span> <br />
                    <span>{team.department}</span>
                  </div>

                  <div className="mt-5">
                    <span className="text-gray-500">Phone</span> <br />
                    <span>+88012332432</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span className="text-gray-500">Join Date</span>
                  <br />
                  <span>20-05-2025</span>
                </div>
                <div className="mt-5">
                  <span className="text-gray-500"> Completed Task </span>
                  <br />
                  <span>{22}</span>
                </div>
                <div className="mt-5">
                  <span className="text-gray-500"> Email </span>
                  <br />
                  <span>demo@gmail.com</span>
                </div>
              </div>
              <div className="">
                <button className=" bg-[#238DB2] px-3 py-2 flex items-center gap-x-1 text-white rounded-md">
                  <TbEdit />
                  Edit
                </button>
              </div>
            </div>

            {/* team overview */}
            <div className="mx-7">
              <TeamOverView
                clientName="Mark Lee"
                companyName="Company Name"
                clientImage="/dashboard/profile.jpeg"
                dueAmount="$1850"
                projects={[
                  {
                    name: "HR Management",
                    progress: 62,
                    paymentAmount: "$1200",
                  },
                  { name: "Fitness App", progress: 45, paymentAmount: "" },
                  { name: "Survey Software", progress: 100, paymentAmount: "" },
                  { name: "File Manager", progress: 75, paymentAmount: "" },
                  { name: "File Manager", progress: 75, paymentAmount: "" },
                ]}
                clients={["Mark Lee", "John Doe", "Jane Smith"]}
              />
            </div>

            
            <Settings/>
            
          </>
        ))}
      </div>
    </div>
  );
};

export default TeamDetails;
