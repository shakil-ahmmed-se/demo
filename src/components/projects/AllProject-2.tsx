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
import { IoIosSearch, IoMdArrowDropright } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import Link from "next/link";
import AddProjectDialog from "./AddProjectDialog";
import AddProjectModal from "./AddProjectDialog";

interface Project {
  id: number;
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

export default function ProjectTable() {
  const [projects, setProjects] = useState<Project[]>(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
const [isModalOpen, setIsModalOpen] = useState(false);



const addNewProject = (newProject: Project) => {
    setProjects([...projects, newProject]); // Add the new row at the bottom
    const totalPages = Math.ceil((projects.length + 1) / itemsPerPage);
    setCurrentPage(totalPages);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjects(initialData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Sorting logic
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "project") {
      return a.project.localeCompare(b.project);
    } else if (sortBy === "date") {
      return a.date.localeCompare(b.date);
    } else if (sortBy === "clientName") {
      return a.clientName.localeCompare(b.clientName);
    } else if (sortBy === "status") {
      return a.status.localeCompare(b.status);
    }
    return 0; 
  });


  const itemsPerPage = 5;
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const paginatedProjects = sortedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  
  return (
    <div className="p-4  rounded-lg border mt-10  shadow-md overflow-hidden">
  <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
    <h2 className="text-lg font-semibold">All Projects</h2>
    <div className="flex flex-wrap items-center gap-2 relative">
      <IoIosSearch className="absolute w-4 h-4 top-1/2 left-3 -translate-y-1/2 text-gray-500" />
      <Input
        placeholder="Search here"
        value={searchQuery}
        onChange={handleSearch}
        className="w-96 pl-10 bg-[#EBEDF0] rounded-full"
      />
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="project">Project</SelectItem>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="clientName">Client Name</SelectItem>
          <SelectItem value="status">Status</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" className="border-[#238DB2]">
        <CiExport />
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

  {/* Table container with horizontal scroll */}
  <div className="overflow-x-auto">
    <Table className="min-w-full">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Assign to</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Client Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead>Paid</TableHead>
          <TableHead>Due Amount</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {paginatedProjects.map((project) => (
          <TableRow key={project.id}>
            <TableCell><Checkbox /></TableCell>
            <TableCell><div className="border py-2 px-3 rounded-xl">{project.project}</div></TableCell>
            <TableCell><div className="border py-2 px-3 rounded-xl">{project.assignTo}</div></TableCell>
            <TableCell><div className="border py-2 px-3 rounded-xl">{project.date}</div></TableCell>
            <TableCell><div className="border py-2 px-3 rounded-xl">{project.clientName}</div></TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center border px-4 py-1 text-sm font-medium rounded-xl ${
                  project.status === "Active" ? "border-green-500 text-green-600" : "border-red-500 text-red-600"
                }`}
              >
                <span
                  className={`w-2 h-2 mr-1 rounded-full ${
                    project.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                {project.status}
              </span>
            </TableCell>
            <TableCell><div className="border py-2 px-3 rounded-xl">${project.totalAmount}</div></TableCell>
            <TableCell><div className="border py-2 px-3 rounded-xl">${project.paid}</div></TableCell>
            <TableCell><div className="border py-2 px-3 rounded-xl">${project.dueAmount}</div></TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Link href={`/projects/${project.id}`}>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </Link>
                <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                <Button variant="ghost" size="sm"><Trash className="w-4 h-4" /></Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>

  {/* Pagination */}
  <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
    <Button
      variant="outline"
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    >
      Previous
    </Button>
    <div className="flex space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      ))}
    </div>
    <Button
      variant="outline"
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
    >
      Next
    </Button>
  </div>

  {/* Modal */}
  <AddProjectModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    onAddProject={addNewProject}
  />
</div>

  );
}
