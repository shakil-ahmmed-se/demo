// app/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, PencilIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

interface Task {
  id: number;
  task: string;
  deadline: string;
  milestone: string;
  assignedPerson: string;
  status: "Complete" | "Progressing";
}

export default function TaskList() {
  const [currentPage, setCurrentPage] = useState(2);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      task: "Design Admin panel",
      deadline: "12-02-24",
      milestone: "Design UI",
      assignedPerson: "Deanna Jones",
      status: "Complete",
    },
    {
      id: 2,
      task: "Deanna Jones",
      deadline: "02-11-24",
      milestone: "Product Development",
      assignedPerson: "Deanna Jones",
      status: "Progressing",
    },
    {
      id: 3,
      task: "Design Login page",
      deadline: "02-11-24",
      milestone: "Product Development",
      assignedPerson: "Deanna Jones",
      status: "Complete",
    },
    {
      id: 4,
      task: "Deanna Jones",
      deadline: "02-11-24",
      milestone: "Product Development",
      assignedPerson: "Deanna Jones",
      status: "Progressing",
    },
    {
      id: 5,
      task: "Design Login page",
      deadline: "02-11-24",
      milestone: "Product Development",
      assignedPerson: "Deanna Jones",
      status: "Complete",
    },
  ]);

  return (
    <div className="container mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-medium">All Task</h1>
        <div className="flex gap-4">
          <div className="relative">
            <Input
              className="w-64 pl-8 pr-4 py-2 rounded-md"
              placeholder="Search here"
            />
            <div className="absolute inset-y-0 left-3 flex items-center">
                <BsSearch className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="outline" className="flex items-center gap-2">
              Sort By
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button className="bg-[#238DB2] text-white hover:bg-blue-500">
            Add Task
          </Button>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="w-12 py-3 text-center">#</th>
              <th className="w-12"></th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">Task</th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">Deadline</th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">Milestone</th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">Assigned People</th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">Status</th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id} className="border-b">
                <td className="py-4 text-center">{task.id}.</td>
                <td className="pl-4">
                  <Checkbox />
                </td>
                <td className="py-4 px-4">
                    <div className="border py-2 px-3 rounded-xl w-full">
                    {task.task}
                    </div>
                </td>
                <td className="py-4 px-4">
                    <div className="border py-2 px-3 rounded-xl w-full">
                        {task.deadline}
                    </div>
                </td>
                <td className="py-4 px-4">
                    <div className="border py-2 px-3 rounded-xl w-full">
                        {task.milestone}
                    </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Image src="/dashboard/profile.jpeg" width={30} height={20} alt="profile image" className="rounded-2xl"/>
                    <span>{task.assignedPerson}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge
                    className={`rounded-full px-3 py-1 text-xs ${
                      task.status === "Complete"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${
                          task.status === "Complete" ? "bg-green-600" : "bg-orange-500"
                        }`}
                      ></span>
                      {task.status}
                    </span>
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <EyeIcon className="h-4 w-4 text-gray-400" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <PencilIcon className="h-4 w-4 text-gray-400" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <TrashIcon className="h-4 w-4 text-gray-400" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-6 gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 ${
            currentPage === 1 ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 ${
            currentPage === 2 ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setCurrentPage(2)}
        >
          2
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 ${
            currentPage === 3 ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setCurrentPage(3)}
        >
          3
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 ${
            currentPage === 4 ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setCurrentPage(4)}
        >
          4
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 ${
            currentPage === 5 ? "bg-blue-50 text-blue-600" : ""
          }`}
          onClick={() => setCurrentPage(5)}
        >
          5
        </Button>
        <span className="px-2">...</span>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}