// components/ProjectOverview.tsx
import React from 'react';
import Image from 'next/image';
import TeamMemberList from './TeamMemberList';
import { MdEmail } from 'react-icons/md';

// Define the type for a team member
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
  // Calculate the angle for the dot and payment label based on progress
  const getCoordinatesForPercent = (percent: number) => {
    const radians = (percent / 100) * 2 * Math.PI - Math.PI / 2; 
    const radius = 15.9155; 
    const x = 18 + radius * Math.cos(radians); 
    const y = 18 + radius * Math.sin(radians);
    return { x, y };
  };

  const paymentCoords = getCoordinatesForPercent(paymentProgress);

  return (
    <div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Project Overview</h2>
          <button className="px-4 py-2 bg-[#238DB2] text-white rounded-md hover:bg-blue-500">
            View All
          </button>
        </div>

        {/* Project Name */}
        <div className="mb-6">
          <select className="w-1/3 p-2 border rounded-md text-gray-700">
            <option>{projectName}</option>
          </select>
        </div>

        {/* Progress and Payment Section */}
        <div className="flex md:grid-cols-3 gap-2 mb-6">
          {/* Working Progress */}
          <div className="flex flex-col w-3/12  items-center p-4 border rounded-md">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Working Progress</h3>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                {/* Background Circle */}
                <path
                  className="text-gray-200"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                {/* Progress Circle */}
                <path
                  className="text-[#238DB2]"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={`${workingProgress}, 100`}
                  strokeLinecap="round"
                />
                
                <circle
                  cx={getCoordinatesForPercent(workingProgress).x}
                  cy={getCoordinatesForPercent(workingProgress).y}
                  r="2"
                  fill="#238DB2"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-800">{workingProgress}%</span>
              </div>
            </div>
            <button className="mt-4 text-blue-500 hover:underline">View Details</button>
          </div>

          {/* Payment */}
          <div className="flex flex-col w-3/12  items-center p-4 border rounded-md">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Payment</h3>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                {/* Background Circle */}
                <path
                  className="text-gray-200"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                {/* Progress Circle */}
                <path
                  className="text-[#238DB2]"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={`${paymentProgress}, 100`}
                  strokeLinecap="round"
                />
                
                <circle
                  cx={paymentCoords.x}
                  cy={paymentCoords.y}
                  r="2"
                  fill="#238DB2" 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-800">{paymentProgress}%</span>
              </div>
              {/* Payment Amount Label */}
              <div
                className="absolute bg-[#238DB2] text-white text-xs font-medium px-2 py-1 rounded-full"
                style={{
                  left: `${paymentCoords.x * 2.5 - 20}px`, 
                  top: `${paymentCoords.y * 2.5 - 10}px`, 
                }}
              >
                {paymentAmount}
              </div>
            </div>
            <button className="mt-4 text-[#238DB2] hover:underline">View Details</button>
          </div>

          {/* Total Assigned Members */}
          <div className="p-4 w border rounded-md w-8/12">
            <div className="flex  justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-700">
                Total Assigned Member ({totalMembers})
              </h3>
              <button className="text-[#238DB2] hover:underline">View All</button>
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
                  <p className="text-gray-800 font-medium text-sm">{member.name}</p>
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