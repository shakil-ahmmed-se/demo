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

interface Client {
  id: number;
  name: string;
  image?: string;
  phone: string;
  email: string;
  company: string;
  paymentStatus: "Pending" | "Paid";
  lastContact: string;
  projects: number;
}

// Sample data (to be replaced with API data)
const initialClientData: Client[] = [
  {
    id: 1,

    name: "Deniel Mark",
    image: "/clients/profile.jpg",
    phone: "+19875346124",
    email: "markxyz@gmail.com",
    company: "Nexable tech",
    paymentStatus: "Pending",
    lastContact: "12-01-24",
    projects: 3,
  },
  {
    id: 2,
    name: "Deniel Mark",
    phone: "+19875346124",
    email: "markxyz@gmail.com",
    company: "Nexable tech",
    paymentStatus: "Paid",
    lastContact: "12-01-24",
    projects: 3,
  },
  {
    id: 3,
    name: "Deniel Mark",
    phone: "+19875346124",
    email: "markxyz@gmail.com",
    company: "Nexable tech",
    paymentStatus: "Pending",
    lastContact: "12-01-24",
    projects: 3,
  },
  {
    id: 4,
    name: "Deniel Mark",
    phone: "+19875346124",
    email: "markxyz@gmail.com",
    company: "Nexable tech",
    paymentStatus: "Paid",
    lastContact: "12-01-24",
    projects: 3,
  },
  {
    id: 5,
    name: "Deniel Mark",
    phone: "+19875346124",
    email: "markxyz@gmail.com",
    company: "Nexable tech",
    paymentStatus: "Paid",
    lastContact: "12-01-24",
    projects: 3,
  },
];

export default function ClientTable() {
  const [clients, setClients] = useState<Client[]>(initialClientData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchClients = async () => {
      try {
       
        setClients(initialClientData);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);


  const sortedClients = [...clients].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortBy === "company") {
      return a.company.localeCompare(b.company);
    } else if (sortBy === "paymentStatus") {
      return a.paymentStatus.localeCompare(b.paymentStatus);
    }
    return 0; 
  });


  const filteredClients = sortedClients.filter((client) =>
    Object.values(client).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );


  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <div className="p-4 bg-white rounded-lg border mt-10 mx-5 shadow-md overflow-hidden">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Clients</h2>
        <div className="flex space-x-2 relative">
          <IoIosSearch className="absolute w-4 h-4 top-1/3 ml-5" />
          <Input
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearch}
            className="w-96 pl-10 bg-[#EBEDF0] "
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="company">Company</SelectItem>
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Last Contact</TableHead>
            <TableHead>Projects</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedClients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Image
                    src={client.image? client.image : "/clients/profile.jpg"}
                    alt="Client"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="border py-3 px-3 rounded-xl min-w-[5/12] ">{client.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="border py-3 px-3 rounded-xl min-w-[7/12]">
                  {client.phone}
                </div>
              </TableCell>
              <TableCell>
                <div className="border py-3 px-3 rounded-xl min-w-[7/12]">
                  {client.email}
                </div>
              </TableCell>
              <TableCell>
                <div className="border py-3 px-3 rounded-xl min-w-[7/12]">
                  {client.company}
                </div>
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center border px-5 py-3 text-sm font-medium rounded-xl ${
                    client.paymentStatus === "Paid"
                      ? "border-[#00CA70] text-[#00CA70]"
                      : "border-orange-500 text-orange-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 mr-1 rounded-full ${
                      client.paymentStatus === "Paid"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  />
                  {client.paymentStatus}
                </span>
              </TableCell>
              <TableCell>
                <div className="border py-3 px-3 rounded-xl min-w-[7/12]">
                  {client.lastContact}
                </div>
              </TableCell>
              <TableCell>
                <div className="border py-3 px-3 rounded-xl min-w-[7/12]">
                  {client.projects}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex space-x-1 border py-3 px-3 rounded-xl min-w-[5/12]">
                  <Link
                    href={`/clients/${client.id}`}
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

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
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
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

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
}