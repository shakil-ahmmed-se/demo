'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import PaymentDetails from './PaymentDetails';
import ProjectDetails from './ProjectDetails';

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

const ClientOverview: React.FC<ClientOverviewProps> = ({
  clientName,
  companyName,
  clientImage,
  dueAmount,
  projects,
  clients,
}) => {
  const [activeTab, setActiveTab] = useState<'Payment Details' | 'Project Details'>('Payment Details');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border my-10">
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
            <select
              className="w-full p-1 border rounded-md text-gray-800 text-sm bg-transparent"
              value={clientName}
              onChange={(e) => console.log('Selected client:', e.target.value)} 
            >
              {clients.map((client, index) => (
                <option key={index} value={client} selected={client === clientName}>
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

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`font-medium pb-1 ${
            activeTab === 'Payment Details'
              ? 'text-[#238DB2] border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('Payment Details')}
        >
          Payment Details
        </button>
        <button
          className={`font-medium pb-1 ${
            activeTab === 'Project Details'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('Project Details')}
        >
          Project Details
        </button>
      </div>

      {/* Render the appropriate component based on active tab */}
      {activeTab === 'Payment Details' ? (
        <PaymentDetails projects={projects} />
      ) : (
        <ProjectDetails projects={projects} />
      )}
    </div>
  );
};

export default ClientOverview;