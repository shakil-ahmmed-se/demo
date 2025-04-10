"use client";

import ClientOverView from "@/components/clients/ClientOverView";
import Settings from "@/components/team/Settings";
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

const ClientDetails = () => {
  const clientId = Number(useParams().clientId);
  console.log("team id", clientId);
  const teamMembers = initialTeamMemberData.filter(
    (member) => member.id === clientId
  );
  console.log(teamMembers);

  return (
    <div>
      <div>
        {teamMembers.map((team) => (
          <div key={team.id}>
            <div key={team.id} className="flex  items-center gap-x-2 mx-10 my-5">
              <Image
                src={"/dashboard/profile.jpeg"}
                alt={team.name}
                width={40}
                height={20}
                className="rounded-[100%] w-10 h-10 mr-4"
              />
              <h3 className="text-xl font-bold">{team.name}</h3>
            </div>

            {/* profile info div */}

            <div className="flex justify-between  bg-white shadow drop-shadow-2xl rounded-2xl p-10 mx-10 ">
              <div>
                <h4 className="text-lg font-bold">Details</h4>
                <div className=" space-y-5">
                  <div className="mt-5">
                    <span className="text-gray-500">Name </span> <br />
                    <span>{team.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Email</span> <br />
                    <span>demo@gmail.com</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone</span> <br />
                    <span>+8801923123</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span>Last Contact</span>
                  <br />
                  <span className="text-gray-500">02-04-2025</span>
                </div>
                <div className="mt-5">
                  <span className="text-gray-500"> Company </span>
                  <br />
                  <span>CodenVibe</span>
                </div>
                <div className="mt-5">
                  <span className="text-gray-500"> Projects </span>
                  <br />
                  <span>6</span>
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
            <div className="mx-8">
              <ClientOverView
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
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDetails;
