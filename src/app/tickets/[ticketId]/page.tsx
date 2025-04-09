"use client";
import AllComments from "@/components/tickets/AllComments";
import StatusTop from "@/components/tickets/StatusTop";
import TicketIssue from "@/components/tickets/TicketIssue";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";

const TicketDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ticketId = Number(useParams().ticketId);
  console.log("get ticket id", ticketId);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div>
      <StatusTop />
      <div className="flex justify-between  bg-white shadow drop-shadow-2xl rounded-2xl p-10 mx-8 mt-10">
        <div>
          <h4 className="text-lg font-bold">Ticket Details</h4>

          <div className=" space-y-5">
            <div className="mt-5">
              <span className="text-gray-500">Ticek Id </span> <br />
              <span>#D6F4FF</span>
            </div>
            <div>
              <span className="text-gray-500">Email</span> <br />
              <span>demo@gmail.com</span>
            </div>
            <div>
              <span className="text-gray-500">Phone</span> <br />
              <span>+8801923123</span>
            </div>
            <div className="mt-5">
              <span className="text-gray-500 mb-3"> Assigne </span>
              <br />
              <div className="px-3 py-2 border border-gray-500 rounded-md">John Doe</div>
            </div>
          </div>
        </div>
        <div className="mt-10">
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
            <span className="text-gray-500"> Priority </span>
            <br />
            <span>High</span>
          </div>
          <div className="mt-5">
            <span className="text-gray-500 mb-3"> Status </span>
            <br />
            <div className="border border-[#F49344] bg-[#FFF5EC] py-2 mt-2 rounded-md px-3">Progressing</div>
          </div>
        </div>
        <div className="">
          <button
            onClick={toggleModal}
            className=" bg-[#238DB2] px-3 py-2 flex items-center gap-x-1 text-white rounded-md cursor-pointer"
          >
            <TbEdit />
            Edit
          </button>
        </div>
      </div>

      <TicketIssue/>

      <AllComments/>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Add New Client
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

export default TicketDetailsPage;
