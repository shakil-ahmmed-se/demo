"use client";

import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const task = {
  id: "5866748",
  assignee: "Deanna Jones",
  startDate: "13/01/25",
  deadline: "12/02/25",
  milestone: "01",
  description:
    "Design a user-friendly and visually appealing admin panel with intuitive navigation, responsive layout, and essential management features. Ensure consistency in the UI for a seamless user experience.",
  workingDays: "05",
};

export default function TaskDetails() {
  const router = useRouter();
  const { taskId } = useParams();

  const [status, setStatus] = useState("Ongoing");


  const handleStatusChange = (value: any) => {
    setStatus(value);
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="text-sm text-blue-600 mb-4">
        <button onClick={() => router.back()} className="hover:underline py-3 px-4 cursor-pointer text-[#238DB2] hover:">
          HR Management &gt;{" "}
          <span className="hover:underline">
            Design Admin Panel
          </span>
        </button>{" "}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Task Details</h1>
          <button className="flex items-center gap-2 bg-[#238DB2] text-white px-4 py-2 rounded-md cursor-pointer">
            <FiEdit />
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <span className="font-medium">Task ID:</span> #{task.id}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Start Date:</span> {task.startDate}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-medium text-gray-600">Status:</span>
              <RadioGroup.Root
                value={status}
                onChange={handleStatusChange}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroup.Item
                    value="Ongoing"
                    id="ongoing"
                    className="w-5 h-5 rounded-full border-2 border-[#238DB2] data-[state=checked]:bg-[#238DB2]"
                  >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:block after:w-2 after:h-2 after:rounded-full after:bg-white" />
                  </RadioGroup.Item>
                  <label htmlFor="ongoing">Ongoing</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroup.Item
                    value="Complete"
                    id="complete"
                    className="w-5 h-5 rounded-full border-2 border-[#238DB2] data-[state=checked]:bg-[#238DB2]"
                  >
                    <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:block after:w-2 after:h-2 after:rounded-full after:bg-white" />
                  </RadioGroup.Item>
                  <label htmlFor="complete">Complete</label>
                </div>
              </RadioGroup.Root>
            </div>
          </div>
          <div>
            <p className="text-gray-600">
              <span className="font-medium">Assign to:</span> {task.assignee}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Deadline:</span> {task.deadline}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Milestone:</span> {task.milestone}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Task Description</h2>
        <p className="text-gray-600">{task.description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Assignee Update</h2>
        <div className=" justify-between items-center">
          <p className="text-gray-600">
            <span className="font-medium">Working day:</span> {task.workingDays}
          </p>
          <div className="flex items-center space-x-2 ">
            <Label htmlFor="airplane-mode my-2 ">Task Status</Label>
            <Switch id="airplane-mode" className="data-[state=checked]:bg-[#238DB2]" />
          </div>
        </div>
      </div>
    </div>
  );
}
