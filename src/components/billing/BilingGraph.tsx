"use client";

import React, { useState } from "react";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { FaRegListAlt, FaRegPlusSquare } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CiExport } from "react-icons/ci";
import TopProjectCards from "../dashboard/TopProjectCard";
import ExpenseChart from "../dashboard/Expense";
import { Edit, Eye, Table, Trash } from "lucide-react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "@radix-ui/react-checkbox";
import Link from "next/link";
import RevenueChart from "../dashboard/RevenuChart";
import AllTasks from "../projects/AllTasks";
import ProjectTable from "../projects/AllProject-2";

interface Project {
  id: number;
  invoice: string;
  project: string;
  clientName: string;
  amount: number;
}

const projects: Project[] = [
  {
    id: 1,
    invoice: "#I-313446",
    project: "HR Management",
    clientName: "Deniel Mark",
    amount: 1200,
  },
  {
    id: 2,
    invoice: "#I-313446",
    project: "Admin Panel",
    clientName: "Deniel Mark",
    amount: 1200,
  },
  {
    id: 3,
    invoice: "#I-313446",
    project: "Client Portal",
    clientName: "Deniel Mark",
    amount: 800,
  },
];

const BilingGraph = () => {
  const [search, setSearch] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-5 mt-4">
        <div className="text-[#238DB2] flex font-extrabold gap-x-1">
          <IoReturnUpBackOutline className="w-5 h-5" />
          <span>Billing</span>
        </div>

        <div className="flex gap-x-3">
          <Link href={`/billing`}>
            <FaRegListAlt className="text-gray-500 h-7 w-7" />
          </Link>
          <BsFillFileEarmarkBarGraphFill className="text-[#238DB2] w-7 h-6 " />
        </div>
      </div>

      {/* Billing overview */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2 mx-10 mt-10">
        <h2 className="text-lg font-semibold">Billing Overview</h2>
        <div className="flex flex-wrap items-center gap-2 relative">
          <IoIosSearch className="absolute w-4 h-4 top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearch}
            className="w-96 pl-10 bg-[#EBEDF0] rounded-full"
          />

          <Button variant="outline" className="border-[#238DB2] text-[#238DB2]">
            <CiExport />
            <span className="text-[#238DB2]">Export Data</span>
          </Button>
          <Button variant="outline" className="bg-[#238DB2] text-white">
            <FaRegPlusSquare />
            <span className=" bg-[#238DB2] text-white">Generate Invoice</span>
          </Button>
        </div>
      </div>

      <div>
        <TopProjectCards />
      </div>

      <div className="flex flex-row items-center justify-between gap-x-5 mx-3 mt-10">
        <div>
          <ExpenseChart />
        </div>
        <div className="w-full">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead>Invoice</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Client Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="border py-2 px-3 rounded-xl">
                      {project.project}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="border py-2 px-3 rounded-xl">
                      {project.clientName}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="border py-2 px-3 rounded-xl">
                      ${project.amount}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex space-x-2">
                      <Link
                        href={`/projects/${project.id}`}
                        className="cursor-pointer"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="cursor-pointer"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="cursor-pointer"
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <ProjectTable title={"Revenue per client or project"}/> */}
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-5">
        <div className="w-full">
          <RevenueChart />
        </div>
        <div>
          <ExpenseChart />
        </div>
      </div>
    </div>
  );
};

export default BilingGraph;
