"use client";

import BillingDetailsTable from "@/components/billing/BillingDetailsTable";
import PaymentDetails from "@/components/dashboard/PaymentDetails";
import Settings from "@/components/team/Settings";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";

interface Project {
  id: number;
  invoice: string;
  project: string;
  assignTo: string;
  date: string;
  clientName: string;
  status: "Active" | "Inactive";
  totalAmount: number;
  paid: number;
  dueAmount: number;
}

// Sample data (to be replaced with API data)
const initialData: Project[] = [
  {
    id: 1,
    invoice: "#I-313446",
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
    invoice: "#I-313446",
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
    invoice: "#I-313446",
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
    invoice: "#I-313446",
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
    invoice: "#I-313446",
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
    invoice: "#I-313446",
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
    invoice: "#I-313446",
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

const BillingDetails = () => {
  const billingId = Number(useParams().billingId);
  console.log("Billing id", billingId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Data = initialData.filter((data) => {
    return data.id === billingId;
  });
  console.log("billing filter data", Data);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div>
      <div>
        {Data.map((team) => (
          <div key={team.id}>
            <div
              key={team.id}
              className="flex  items-center gap-x-2 mx-10 my-5"
            >
              <div>
                <h4 className="text-gray-500 "><span className="font-bold text-black">Invoice Id:</span> {team.invoice}</h4>
                <h3 className="text-xl text-gray-500"><span className="text-bold text-black">Projects:</span> {team.project}</h3>
              </div>
            </div>

            {/* profile info div */}

            <div className="flex justify-between  bg-white shadow drop-shadow-2xl rounded-2xl p-10 mx-10 ">
              <div>
                {/* <h4 className="text-lg font-bold">Details</h4> */}
                <Image src={'/login/logo.png'} alt="codenVibe" width={130} height={130} />
                <div className=" space-y-5">
                  <div className="mt-5">
                    <span className="text-gray-500">Invoice </span> <br />
                    <span>{team.invoice}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Email</span> <br />
                    <span>demo@gmail.com</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone</span> <br />
                    <span>+8801923123</span>
                  </div>
                </div>
              </div>
              <div>
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
                  <span className="text-gray-500"> Projects </span>
                  <br />
                  <span>6</span>
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

            {/* Work Information */}
            <div className="flex justify-between  bg-white shadow drop-shadow-2xl rounded-2xl p-10 mx-10 mt-10">
              <div>
                <h4 className="text-lg font-bold"> Work information</h4>
                <div className=" space-y-5">
                  <div className="mt-5">
                    <span className="text-gray-500">Name </span> <br />
                    <span>Ethan Mitchell</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Email</span> <br />
                    <span>demo@gmail.com</span>
                  </div>

                  <div className="mt-5">
                    <span className="text-gray-500">Phone</span> <br />
                    <span>+88012332432</span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span className="text-gray-500">Join Date</span>
                  <br />
                  <span>20-05-2025</span>
                </div>
                <div className="mt-5">
                  <span className="text-gray-500"> Completed Task </span>
                  <br />
                  <span>{22}</span>
                </div>
                <div className="mt-5">
                  <span className="text-gray-500"> Email </span>
                  <br />
                  <span>demo@gmail.com</span>
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

            <div className="w-full ">
            <BillingDetailsTable/>
            </div>
           
          </div>
        ))}

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
    </div>
  );
};

export default BillingDetails;
