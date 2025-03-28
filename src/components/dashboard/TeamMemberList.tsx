// components/TeamMemberList.tsx
import React from 'react';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';

// Define the type for a team member
interface TeamMember {
  name: string;
  image: string;
}

interface TeamMemberListProps {
  teamMembers: TeamMember[];
}

const TeamMemberList: React.FC<TeamMemberListProps> = ({ teamMembers }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">Team Member</h3>
        <button className="p-1 bg-blue-100 rounded-full text-blue-500 hover:bg-blue-200">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      {/* Team Members List */}
      <div className="space-y-2">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-blue-50 rounded-md hover:bg-blue-100 transition"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={40}
              height={40}
              className="rounded-md mr-3"
            />
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{member.name}</p>
            </div>
            <button className="text-[#238DB2] hover:text-blue-500">
            <MdEmail className='w-20 h-8'/>
            </button>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-4 text-right">
        <button className="text-[#238DB2] hover:underline">View All</button>
      </div>
    </div>
  );
};

export default TeamMemberList;