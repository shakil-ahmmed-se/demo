"use client";
import BillingTable from "@/components/billing/BillingTable";
import TopProjectCards from "@/components/dashboard/TopProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import React, { useState } from "react";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { CiExport } from "react-icons/ci";
import { FaRegListAlt, FaRegPlusSquare } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoReturnUpBackOutline } from "react-icons/io5";

const BillingPage = () => {
  const [sortBy, setSortBy] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-5 mx-8">
        <div className="text-[#238DB2] flex font-extrabold gap-x-1">
          <IoReturnUpBackOutline className="w-5 h-5" />
          <span>Billing</span>
        </div>

        <div className="flex gap-x-3">
        <FaRegListAlt className="text-[#238DB2] h-7 w-7" />
        <BsFillFileEarmarkBarGraphFill className="w-7 h-6 text-gray-500" />
        </div>
      </div>
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
          {/* <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="project">Project</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="clientName">Client Name</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select> */}
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

      <div>
        <BillingTable />
      </div>
    </div>
  );
};

export default BillingPage;
