"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import PaymentDetails from "../clients/PaymentDetails";
import ProjectDetails from "../clients/ProjectDetails";


interface Project {
  name: string;
  progress: number;
  paymentAmount?: string;
}

interface ClientOverviewProps {
  clientName: string;
  companyName: string;
  clientImage: string;
  dueAmount: string;
  projects: Project[];
  clients: string[];
}

const TeamOverView: React.FC<ClientOverviewProps> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState<
    "Payment Details" | "Project Details" 
  >("Payment Details");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border my-10">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`font-medium pb-1 ${
            activeTab === "Payment Details"
              ? "text-[#238DB2] border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Payment Details")}
        >
          Payment Details
        </button>
        <button
          className={`font-medium pb-1 ${
            activeTab === "Project Details"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Project Details")}
        >
          Project Details
        </button>
       
      </div>

      {activeTab === "Payment Details" ? (
        <PaymentDetails projects={projects} />
      ) : (
        <ProjectDetails projects={projects} />
      )}
    </div>
  );
};

export default TeamOverView;
