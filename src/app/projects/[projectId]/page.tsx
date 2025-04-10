"use client";

import MileStoneBar from "@/components/projects/MileStone";
import Overview from "@/components/projects/OverView";
import ProgressBar from "@/components/projects/Progress";
import TaskList from "@/components/projects/TaskList";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

interface Project {
  id: number;
  project: string;
  assignTo: string;
  date: string;
  clientName: string;
  status: "Active" | "Inactive";
  totalAmount: number;
  paid: number;
  dueAmount: number;
}

type Tasks = {
  title: string;
  count: number;
};

type UserCardProps = {
  name: string;
  imageUrl: string;
};

const tasks: Tasks[] = [
  { title: "Total Milestone", count: 5 },
  { title: "Total Task", count: 35 },
  { title: "Completed Task", count: 25 },
  { title: "Progressing Task", count: 5 },
];

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

const initialData: Project[] = [
  {
    id: 1,
    project: "HR Management",
    assignTo: "05",
    date: "12-01-24",
    clientName: "Deniel Mark",
    status: "Active",
    totalAmount: 1200,
    paid: 500,
    dueAmount: 700,
  },
  {
    id: 2,
    project: "Admin Panel",
    assignTo: "05",
    date: "10-01-24",
    clientName: "Deniel Mark",
    status: "Active",
    totalAmount: 1200,
    paid: 500,
    dueAmount: 700,
  },
  {
    id: 3,
    project: "Client Portal",
    assignTo: "05",
    date: "07-01-24",
    clientName: "Deniel Mark",
    status: "Active",
    totalAmount: 1200,
    paid: 500,
    dueAmount: 700,
  },
  {
    id: 4,
    project: "HR Management",
    assignTo: "05",
    date: "07-01-24",
    clientName: "Deniel Mark",
    status: "Active",
    totalAmount: 1200,
    paid: 500,
    dueAmount: 700,
  },
  {
    id: 5,
    project: "HR Management",
    assignTo: "05",
    date: "12-01-24",
    clientName: "Deniel Mark",
    status: "Inactive",
    totalAmount: 1200,
    paid: 500,
    dueAmount: 700,
  },
  {
    id: 6,
    project: "HR Management",
    assignTo: "05",
    date: "12-01-24",
    clientName: "Deniel Mark",
    status: "Active",
    totalAmount: 1200,
    paid: 500,
    dueAmount: 700,
  },
  {
    id: 7,
    project: "HR Management",
    assignTo: "05",
    date: "12-01-24",
    clientName: "Deniel Mark",
    status: "Active",
    totalAmount: 1200,
    paid: 500,
    dueAmount: 700,
  },
];

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  console.log(projectId);

  const project = initialData.find(
    (project) => project.id === Number(projectId)
  );
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="h-full overflow-x-hidden">
      <h4 className="text-lg m-10">Projects Details</h4>
      <div className="w-full  mt-10 p-6 bg-white rounded-lg border-[#A6E7FF] border overflow-x-hidden">
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-b from-[#D4EEF7] via-[#CFECF7] to-[#A6E7FF] rounded-full">
                <Image
                  src={"/login/N-logo.png"}
                  width={100}
                  height={100}
                  alt="logo"
                />
              </div>
              <div className="flex  items-center gap-x-20">
                <div>
                  <h1 className="text-2xl font-bold">{project.project}</h1>
                  <p className="text-gray-500">Project ID: {project.id}</p>
                  <p className="">
                    <span className="text-gray-500"> Status:</span>
                    <span
                      className={`text-${
                        project.status === "Active" ? "green" : "red"
                      }-500 ml-2`}
                    >
                      <span
                        className={`inline-block w-2 h-2 rounded-full bg-${
                          project.status === "Active" ? "green" : "red"
                        }-500 mr-1`}
                      ></span>
                      <span className="text-gray-500">{project.status}</span>
                    </span>
                  </p>
                </div>
                <div className="mt-12 text-gray-500">
                  <p>
                    Client:
                    <span className="font-bold"> {project.clientName}</span>
                  </p>
                  <p>Start Date: {project.date}</p>
                  <p>Due Date: {project.date}</p>
                </div>
              </div>
            </div>

            <div></div>
          </div>
          <div className="flex items-center gap-2 mr-10">
            <button className="border-[#238DB2] border text-gray-800 py-2 px-4 rounded-lg">
              View Tickets
            </button>
            <button className="bg-[#238DB2] text-white py-2 px-4 rounded-lg ml-4">
              Delete Project
            </button>
          </div>
        </div>

        {/* overview */}
        <div className="mt-10 shadow-lg p-6 bg-white rounded-lg">
          <h2 className=" text-2xl font-bold uppercase text-center ">
            Overview
          </h2>
          <div className="lg:md:flex  items-center gap-3 mt-6">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex flex-col w-1/4 items-center gap-4 mb-4"
              >
                <div className="bg-[#238DB2] text-white font-medium text-center px-2 py-2 rounded-md w-full mb-4">
                  {task.title}: {task.count.toString().padStart(2, "0")}
                </div>

                <div className="space-y-2 w-full">
                  {users.map((user, idx) => (
                    <div
                      className="flex justify-between items-center  border  rounded-md bg-[#E6F3F6] border-[#39CEF3]"
                      key={idx}
                    >
                      <div className="flex items-center justify-between gap-x-16">
                        <div className="flex items-center gap-2">
                          <Image
                            src={user.imageUrl}
                            alt={user.name}
                            width={32}
                            height={32}
                            className="rounded-l-md"
                          />
                          <span className="text-sm font-medium ">
                            {user.name}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <IoEyeSharp className="text-[#238DB2]" />
                          <MdEmail className="text-[#238DB2]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="text-gray-500 hover:text-[#238DB2] text-sm underline">
              View All Details
            </button>
          </div>
        </div>

        {/* progess */}
        <div>
          <ProgressBar />
        </div>

        {/* milestone */}
        <div>
          <MileStoneBar />
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </div>
  );
}
