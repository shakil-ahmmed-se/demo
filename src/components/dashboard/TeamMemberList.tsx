"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

// Define the type for a team member
interface TeamMember {
  name: string;
  image: string;
}

interface TeamMemberListProps {
  teamMembers: TeamMember[];
}

const TeamMemberList: React.FC<TeamMemberListProps> = ({ teamMembers }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => setIsShowModal(!isShowModal);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">Team Member</h3>
        <button onClick={toggleModal} className="p-1 bg-blue-100 rounded-full text-[#238DB2] hover:bg-blue-200 cursor-pointer">
          <FaPlus />
        </button>
      </div>

      {/* Team */}
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
            <button className="text-[#238DB2] hover:text-blue-400 cursor-pointer">
              <MdEmail className="w-20 h-8" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <Link href={'/team'}>
        <button className="text-[#238DB2] hover:underline cursor-pointer">View All</button>
        </Link>
      </div>

      {/* modal */}

      {isShowModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Add New Project
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Project Name"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Assign To"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Client Name"
                className="w-full p-2 border rounded-md"
              />
              <select className="w-full p-2 border rounded-md">
                <option value="">Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <input
                type="number"
                placeholder="Total Amount"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="Due"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                placeholder="Paid"
                className="w-full p-2 border rounded-md"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-100"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#238DB2] text-white rounded-md hover:bg-blue-400"
                >
                  Save
                </button>
              </div>
            </form>

            <button
              onClick={toggleModal}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberList;
