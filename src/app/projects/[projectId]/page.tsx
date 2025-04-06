"use client";

import Overview from "@/components/projects/OverView";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

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
    <div className="w-full mx-10  mt-10 p-6 bg-white rounded-lg ">
      <div className="flex justify-between items-center">
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
            <div className="flex items-center gap-x-20">
              <div>
                <h1>{project.project}</h1>
                <p>Project ID: {project.id}</p>
                <p className="">
                  Status:
                  <span
                    className={`text-${
                      project.status === "Active" ? "green" : "red"
                    }-500 ml-2`}
                  >
                    {/* add circle status color */}
                    <span
                      className={`inline-block w-2 h-2 rounded-full bg-${
                        project.status === "Active" ? "green" : "red"
                      }-500 mr-1`}
                    ></span>
                    {project.status}
                  </span>
                </p>
              </div>
              <div>
                <p>Client: {project.clientName}</p>
                <p>Start Date: {project.date}</p>
                <p>Due Date: {project.date}</p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div>
          <button className="border-[#238DB2] border text-gray-800 py-2 px-4 rounded-lg">
            View Tickets
          </button>
          <button className="bg-[#238DB2] text-white py-2 px-4 rounded-lg ml-4">
            Delete Project
          </button>
        </div>
      </div>
      <div>
        <Overview/>
      </div>
    </div>
  );
}
