import { Edit, Eye, Table, Trash } from 'lucide-react';
import React, { useState } from 'react';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Checkbox } from '@radix-ui/react-checkbox';
import Link from 'next/link';
import { Button } from '../ui/button';

interface BillinData {
    id: number;
    bank: string;
    account: string;
    branch : string;
    routingNumber: string;
    accountHolder: string;
    payment: number;
    date: string;

  }
  
  // Sample data (to be replaced with API data)
  const initialBillingData: BillinData[] = [
    {
      id: 1,
      bank: "Bank Asia",
      account: "AB342342",
      branch: "Dhaka",
      routingNumber: "#353323",
      accountHolder: "Demo",
      payment: 1200,
      date: '02-11-2025'
    },
    {
      id: 2,
      bank: "Dutch Bangla",
      account: "AB342342",
      branch: "Dhaka",
      routingNumber: "#353323",
      accountHolder: "Demo",
      payment: 1200,
      date: '02-11-2025'
    },
    {
      id: 3,
      bank: "Bank Asia",
      account: "AB342342",
      branch: "Dhaka",
      routingNumber: "#353323",
      accountHolder: "Demo",
      payment: 1200,
      date: '02-11-2025'
    },
    {
      id: 4,
      bank: "Bank Asia",
      account: "AB342342",
      branch: "Dhaka",
      routingNumber: "#353323",
      accountHolder: "Demo",
      payment: 1200,
      date: '02-11-2025'
    },
    
  ];

const BillingDetailsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ItemPerPage = 3;

//     const filterData =() => {

//     }


//     const totalPages = Math.ceil(filteredTeamMembers.length / itemsPerPage);
//   const paginatedTeamMembers = filteredTeamMembers.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
    return (
        <div>
            <h3 className='text-2xl font-bold'>Payment Details</h3>
            <div>
            <div className="w-full overflow-x-hidden md:min-w-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20px]">
                <Checkbox />
              </TableHead>
              <TableHead className="">Bank Name</TableHead>
              <TableHead className="">Account Number</TableHead>
              <TableHead className="">Branch</TableHead>
              <TableHead className="">Routing</TableHead>
              <TableHead className="">Account Holder</TableHead>
              <TableHead className="">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialBillingData.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    
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
            </div>
        </div>
    );
};

export default BillingDetailsTable;