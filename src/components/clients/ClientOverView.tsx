"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import PaymentDetails from "../clients/PaymentDetails";
import ProjectDetails from "../clients/ProjectDetails";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

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

const ClientOverView: React.FC<ClientOverviewProps> = ({ projects }) => {
    const [activeTab, setActiveTab] = useState<
        "Payment Details" | "Project Details" | "Ticket Details"
    >("Payment Details");

    return (
        <div className="p-6 bg-white rounded-lg shadow-2xl drop-shadow-2xl border my-10">
            <div className="flex space-x-4 mb-6">
                <button
                    className={`font-medium pb-1 ${activeTab === "Payment Details"
                            ? "text-[#238DB2] border-b-2 border-blue-500"
                            : "text-gray-500"
                        }`}
                    onClick={() => setActiveTab("Payment Details")}
                >
                    Payment Details hello
                </button>
                <button
                    className={`font-medium pb-1 ${activeTab === "Project Details"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : "text-gray-500"
                        }`}
                    onClick={() => setActiveTab("Project Details")}
                >
                    Project Details
                </button>
                <button
                    className={`font-medium pb-1 ${activeTab === "Ticket Details"
                            ? "text-blue-500 border-b-2 border-blue-500"
                            : "text-gray-500"
                        }`}
                    onClick={() => setActiveTab("Ticket Details")}
                >
                    Ticket Details
                </button>
            </div>
            <div className=" flex justify-between items-center">
                <div className="relative ">
                    {/* search */}
                    <span className="absolute top-3 pl-2 left-2 text-gray-500">
                        <IoSearchOutline />
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-10 py-2 bg-[#EBEDF0] border rounded-2xl text-gray-800 text-sm  mb-4"
                    />
                </div>
                <div>
                    {/* filter */}
                    <div>
                        <select className="w-full px-3 py-2 border rounded-md text-gray-800 text-sm bg-transparent">
                            <option value="">Sort By</option>
                            <option value="Ascending">Ascending</option>
                            <option value="Ascending">Descending</option>
                            <option value="Newest">Newest</option>
                            <option value="Oldest">Oldest</option>
                        </select>
                        
                    </div>
                </div>
            </div>

            {activeTab === "Payment Details" ? (
                <PaymentDetails projects={projects} />
            ) : (
                <ProjectDetails projects={projects} />
            )}
        </div>
    );
};

export default ClientOverView;
