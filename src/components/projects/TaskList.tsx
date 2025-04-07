"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, PencilIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

interface Task {
  id: number;
  task: string;
  deadline: string;
  milestone: string;
  assignedPerson: string;
  status: "Complete" | "Progressing";
}

const tasksData: Task[] = [
  {
    id: 1,
    task: "Design UI",
    deadline: "2023-10-01",
    milestone: "Design",
    assignedPerson: "John Doe",
    status: "Complete",
  },
  {
    id: 2,
    task: "Frontend Development",
    deadline: "2023-10-15",
    milestone: "Development",
    assignedPerson: "Jane Smith",
    status: "Progressing",
  },
  {
    id: 3,
    task: "API Integration",
    deadline: "2023-10-10",
    milestone: "Backend",
    assignedPerson: "Chris Evans",
    status: "Progressing",
  },
  {
    id: 4,
    task: "Testing",
    deadline: "2023-10-20",
    milestone: "Testing",
    assignedPerson: "Scarlett Johansson",
    status: "Complete",
  },
  {
    id: 5,
    task: "Deployment",
    deadline: "2023-10-25",
    milestone: "Deployment",
    assignedPerson: "Tom Holland",
    status: "Progressing",
  },
  {
    id: 6,
    task: "Documentation",
    deadline: "2023-10-30",
    milestone: "Documentation",
    assignedPerson: "Robert Downey Jr.",
    status: "Complete",
  },
  {
    id: 7,
    task: "Code Review",
    deadline: "2023-10-05",
    milestone: "Review",
    assignedPerson: "Chris Hemsworth",
    status: "Progressing",
  },
  {
    id: 8,
    task: "Bug Fixing",
    deadline: "2023-10-12",
    milestone: "Fixing",
    assignedPerson: "Mark Ruffalo",
    status: "Complete",
  },
  {
    id: 9,
    task: "User Feedback",
    deadline: "2023-10-18",
    milestone: "Feedback",
    assignedPerson: "Jeremy Renner",
    status: "Progressing",
  },
  {
    id: 10,
    task: "Final Review",
    deadline: "2023-10-28",
    milestone: "Review",
    assignedPerson: "Benedict Cumberbatch",
    status: "Complete",
  },
];

export default function TaskList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState<Task[]>(tasksData);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const tasksPerPage = 5;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState<Task>({
    id: tasks.length + 1,
    task: "",
    deadline: "",
    milestone: "",
    assignedPerson: "",
    status: "Complete",
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  // const filterTasks = useMemo(() => {
  //   return tasks.filter((task) =>
  //     task.task.toLowerCase().includes(search.toLowerCase())
  //   );
  // }, [search, tasks]);

  const filterTasks = useMemo(() => {
    let result = [...tasks];

    if (search) {
      result = result.filter((task) =>
        task.task.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === "task") {
      result.sort((a, b) => a.task.localeCompare(b.task));
    } else if (sortBy === "deadline") {
      result.sort(
        (a, b) =>
          new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
      );
    } else if (sortBy === "status") {
      result.sort((a, b) => a.status.localeCompare(b.status));
    }

    return result;
  }, [tasks, search, sortBy]);

  const totalPages = Math.ceil(filterTasks.length / tasksPerPage);

  const paginationTasks = useMemo(() => {
    const startIndex = (currentPage - 1) * tasksPerPage;
    return filterTasks.slice(startIndex, startIndex + tasksPerPage);
  }, [filterTasks, currentPage]);

  const handleAddTask = () => {
    const newId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const taskToAdd = { ...newTask, id: newId };

    setTasks((prev) => [...prev, taskToAdd]);
    setNewTask({
      id: newId,
      task: "",
      deadline: "",
      milestone: "",
      assignedPerson: "",
      status: "Progressing",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-medium">All Task</h1>
        <div className="flex gap-4">
          <div className="relative">
            <Input
              className="w-64 pl-8 pr-4 py-2 rounded-md"
              placeholder="Search here"
              value={search}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 left-3 flex items-center">
              <BsSearch className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          <select
            value={sortBy}
            onChange={handleSortChange}
            className="border rounded-md px-4 py-2 text-sm text-gray-700"
          >
            <option value="">Sort By</option>
            <option value="task">Task</option>
            <option value="deadline">Deadline</option>
            <option value="status">Status</option>
          </select>

          {/* Add Task Button */}
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#238DB2] text-white hover:bg-blue-400 cursor-pointer"
          >
            Add Task
          </Button>
        </div>
      </div>

      {/*  Table */}
      <div className="border rounded-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="w-12 py-3 text-center">#</th>
              <th className="w-12"></th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">
                Task
              </th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">
                Deadline
              </th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">
                Milestone
              </th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">
                Assigned People
              </th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">
                Status
              </th>
              <th className="text-left py-3 px-4 text-sm text-gray-500 font-normal">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginationTasks.map((task, index) => (
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
                    <Image
                      src="/dashboard/profile.jpeg"
                      width={30}
                      height={20}
                      alt="profile image"
                      className="rounded-2xl"
                    />
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
                          task.status === "Complete"
                            ? "bg-green-600"
                            : "bg-orange-500"
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

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <Button
          variant="ghost"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="ghost"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

      {/* modal */}
      {isModalOpen && (
        <div className="fixed inset-1 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-3xl border border-cyan-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-cyan-700">Add Task</h2>
              <button
                className="text-gray-500 hover:text-red-500"
                onClick={() => setIsModalOpen(false)}
              >
                <IoIosClose />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Select Milestone
                </label>
                <Input
                  placeholder="Select"
                  value={newTask.milestone}
                  onChange={(e) =>
                    setNewTask({ ...newTask, milestone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Create date
                </label>
                <Input type="date" />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Task</label>
                <Input
                  placeholder="Enter Task"
                  value={newTask.task}
                  onChange={(e) =>
                    setNewTask({ ...newTask, task: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Assign People
                </label>
                <Input
                  placeholder="Select"
                  value={newTask.assignedPerson}
                  onChange={(e) =>
                    setNewTask({ ...newTask, assignedPerson: e.target.value })
                  }
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm text-gray-600 mb-1">
                  Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Task details"
                  className="w-full border rounded-md p-2 text-sm"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Add deadline
                </label>
                <Input
                  type="date"
                  value={newTask.deadline}
                  onChange={(e) =>
                    setNewTask({ ...newTask, deadline: e.target.value })
                  }
                />
                <div className="mt-4">
                  <label className="block text-sm text-gray-600 mb-2">
                    Status
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="status"
                        value="Progressing"
                        checked={newTask.status === "Progressing"}
                        onChange={(e) =>
                          setNewTask({
                            ...newTask,
                            status: e.target.value as Task["status"],
                          })
                        }
                      />
                      <span>Active</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="status"
                        value="Complete"
                        checked={newTask.status === "Complete"}
                        onChange={(e) =>
                          setNewTask({
                            ...newTask,
                            status: e.target.value as Task["status"],
                          })
                        }
                      />
                      <span>Inactive</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <Button
                className="bg-[#238DB2] text-white px-6"
                onClick={handleAddTask}
              >
                Done
              </Button>
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
