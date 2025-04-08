"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, Edit, Trash } from "lucide-react";
import { IoIosSearch } from "react-icons/io";
import { CiExport } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { FaRegPlusSquare } from "react-icons/fa";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  paymentStatus: "Pending" | "Paid";
  lastActivity: string;
}

// Sample data (to be replaced with API data)
const initialTeamMemberData: TeamMember[] = [
  {
    id: 1,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Paid",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
  {
    id: 2,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Pending",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
  {
    id: 3,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Paid",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
  {
    id: 4,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Pending",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
  {
    id: 5,
    name: "Deanna Jones",
    role: "UI/UX Designer",
    department: "Product Development",
    paymentStatus: "Paid",
    lastActivity:
      "Update the design for healthcare app & worked on feedback for landing page",
  },
];

export default function TeamMemberTable() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(
    initialTeamMemberData
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setTeamMembers(initialTeamMemberData);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  // Sorting logic
  const sortedTeamMembers = [...teamMembers].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "role") {
      return a.role.localeCompare(b.role);
    } else if (sortBy === "department") {
      return a.department.localeCompare(b.department);
    } else if (sortBy === "paymentStatus") {
      return a.paymentStatus.localeCompare(b.paymentStatus);
    }
    return 0;
  });

  const filteredTeamMembers = sortedTeamMembers.filter((member) =>
    Object.values(member).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredTeamMembers.length / itemsPerPage);
  const paginatedTeamMembers = filteredTeamMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <div className="p-4 bg-white rounded-lg border mt-10 mx-5 shadow-md overflow-x-auto scrollbar-hide">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h2 className="text-lg font-semibold">Team Member</h2>
        <div className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2 relative">
          <div className="relative">
            <IoIosSearch className="absolute w-4 h-4 top-3 left-3" />
            <Input
              placeholder="Search here"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full md:w-96 pl-10 bg-[#EBEDF0] rounded-lg"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-32">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="role">Role</SelectItem>
              <SelectItem value="department">Department</SelectItem>
              <SelectItem value="paymentStatus">Payment Status</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-[#238DB2]">
            <CiExport className="w-5 h-5" />
          </Button>

          <Button
            onClick={() => setIsModalOpen(true)}
            variant="outline"
            className="bg-[#238DB2] text-white"
          >
            <FaRegPlusSquare />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-hidden md:min-w-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20px]">
                <Checkbox />
              </TableHead>
              <TableHead className="">Name</TableHead>
              <TableHead className="">Role</TableHead>
              <TableHead className="">Department</TableHead>
              <TableHead className="">Payment Status</TableHead>
              <TableHead className="">Last Activity</TableHead>
              <TableHead className="">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedTeamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/clients/profile.jpg"
                      alt="Team Member"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="whitespace-nowrap">{member.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="border py-2 px-3 rounded-xl whitespace-nowrap">
                    {member.role}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="border py-2 px-3 rounded-xl whitespace-nowrap">
                    {member.department}
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center border px-3 py-2 text-sm font-medium rounded-xl whitespace-nowrap ${
                      member.paymentStatus === "Paid"
                        ? "border-[#00CA70] text-[#00CA70]"
                        : "border-orange-500 text-orange-500"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 mr-1 rounded-full ${
                        member.paymentStatus === "Paid"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      }`}
                    />
                    {member.paymentStatus}
                  </span>
                </TableCell>
                <TableCell className="max-w-[170px]">
                  <div className="border py-2 px-3 rounded-xl whitespace-wrap  overflow-hidden  w-full ">
                    {member.lastActivity}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2 border py-2 px-3 rounded-xl">
                    <Link
                      href={`/team/${member.id}`}
                      className="cursor-pointer"
                    >
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="w-full md:w-auto"
        >
          Previous
        </Button>
        <div className="flex space-x-2 overflow-x-auto py-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => setCurrentPage(page)}
              className="min-w-[40px]"
            >
              {page}
            </Button>
          ))}
        </div>
        <Button
          variant="outline"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="w-full md:w-auto"
        >
          Next
        </Button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Add New Team Member
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
}
