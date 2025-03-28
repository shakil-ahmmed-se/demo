// components/ClientOverview.tsx
import React from 'react';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';

// Define types for the project and client data
interface Project {
  name: string;
  progress: number;
  paymentAmount: string;
}

interface ClientOverviewProps {
  clientName: string;
  companyName: string;
  clientImage: string;
  dueAmount: string;
  projects: Project[];
  clients: string[]; // List of clients for the dropdown
}

const ClientOverview: React.FC<ClientOverviewProps> = ({
  clientName,
  companyName,
  clientImage,
  dueAmount,
  projects,
  clients,
}) => {
  const getCoordinatesForPercent = (percent: number) => {
    const radians = (percent / 100) * 2 * Math.PI - Math.PI / 2;
    const radius = 8; 
    const x = 10 + radius * Math.cos(radians); 
    const y = 10 + radius * Math.sin(radians);
    return { x, y };
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border my-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Client Overview</h2>
        <button className="px-4 py-2 bg-[#238DB2] text-white rounded-md hover:bg-blue-600">
          View All
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center p-2 bg-blue-50 border rounded-md w-1/3">
          <Image
            src={clientImage}
            alt={clientName}
            width={40}
            height={40}
            className="rounded mr-2"
          />
          <div className="flex-1">
            
            <select  className="w-full p-1 border rounded-md text-gray-800 text-sm bg-transparent">
              {clients.map((client, index) => (
                <option key={index}  value={client} selected={client === clientName}>
                  {client}
                </option>
              ))}
            </select>
            <p className="text-gray-500 text-xs">{companyName}</p>
          </div>
          <button className="text-[#238DB2]">
            <MdEmail className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex items-center p-2 border text-xl bg-[#F6E6EB] border-[#FF0044] rounded-md">
          <span className="text-gray-700 font-medium mr-2 pr-2 border-r border-[#FF0044]">Due</span>
          <span className="text-gray-800 font-semibold">{dueAmount}</span>
        </div>
      </div>

      
      <div className="flex space-x-4 mb-6">
        <button className="text-blue-500 font-medium border-b-2 border-blue-500 pb-1">
          Payment Details
        </button>
        <button className="text-gray-500 font-medium pb-1">Project Details</button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {projects.map((project, index) => {
          const coords = getCoordinatesForPercent(project.progress);
          return (
            <div key={index} className="flex flex-col items-center p-3 border rounded-md">
              <h3 className="text-base font-medium text-gray-700 mb-1">{project.name}</h3>
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 20 20">
                  {/* Background Circle */}
                  <path
                    className="text-gray-200"
                    d="M10 2
                      a 8 8 0 0 1 0 16
                      a 8 8 0 0 1 0 -16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  {/* Progress Circle */}
                  <path
                    className="text-[#238DB2]"
                    d="M10 2
                      a 8 8 0 0 1 0 16
                      a 8 8 0 0 1 0 -16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={`${project.progress}, 100`}
                    strokeLinecap="round"
                  />
                  
                  <circle
                    cx={coords.x}
                    cy={coords.y}
                    r="1"
                    fill="#3B82F6"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-800">{project.progress}%</span>
                </div>
             
                {project.paymentAmount && (
                  <div
                    className="absolute bg-[#238DB2] text-white text-xs font-medium px-2 py-1 rounded-full"
                    style={{
                      left: `${coords.x * 2 - 20}px`,
                      top: `${coords.y * 2 - 10}px`,
                    }}
                  >
                    {project.paymentAmount}
                  </div>
                )}
              </div>
              <button className="mt-2 text-blue-500 hover:underline text-sm">View Details</button>
            </div>
          );
        })}

        {/* View All Payments */}
        <div className="flex flex-col items-center justify-center p-4 bg-[#238DB2] rounded-md text-white">
          <button className="text-lg font-medium">View All Payments</button>
        </div>
      </div>
    </div>
  );
};

export default ClientOverview;