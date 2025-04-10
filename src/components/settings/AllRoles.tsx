"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const dummyRoles = [
  {
    id: 1,
    role: "Admin",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    createdOn: "12-01-24",
    status: "Active",
    assignedPeople: 3,
  },
  {
    id: 2,
    role: "Client",
    description: "Lorem ipsum dolor sit amet",
    createdOn: "12-01-24",
    status: "Inactive",
    assignedPeople: 5,
  },
];

const AllRoles = () => {
  const [search, setSearch] = useState("");
  const [roles, setRoles] = useState(dummyRoles);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newRole, setNewRole] = useState({
    role: "",
    description: "",
    createdOn: "",
    status: "Active",
    assignedPeople: 0,
  });

  const route = useRouter();

  const filterRoles = dummyRoles.filter(
    (role) =>
      role.role.toLowerCase().includes(search.toLowerCase()) ||
      role.description.toLowerCase().includes(search.toLowerCase()) ||
      role.status.toLowerCase().includes(search.toLowerCase()) ||
      role.createdOn.toLowerCase().includes(search.toLowerCase())
  );

  console.log("data roles", filterRoles);

  const handleChange = (id: number, field: string, value: string | number) => {
    setRoles((prev) =>
      prev.map((role) => (role.id === id ? { ...role, [field]: value } : role))
    );
  };

  const handleAddNew = () => {
    setRoles((prev) => [...prev, { id: Date.now(), ...newRole }]);
    setNewRole({
      role: "",
      description: "",
      createdOn: "",
      status: "Active",
      assignedPeople: 0,
    });
    setDialogOpen(false);
  };

  return (
    <div className="p-4 space-y-4 bg-white ">
      <button
        onClick={() => route.back()}
        className="text-[#238DB2] flex font-extrabold gap-x-1   mx-6 mb-8 cursor-pointer"
      >
        <IoReturnUpBackOutline className="w-5 h-5" />
        <span>Settings {'<'} Roles</span>
      </button>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">All Roles</h2>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search here"
            className="w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#238DB2] cursor-pointer">Add New</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Role</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Role"
                  value={newRole.role}
                  onChange={(e) =>
                    setNewRole({ ...newRole, role: e.target.value })
                  }
                />
                <Input
                  placeholder="Description"
                  value={newRole.description}
                  onChange={(e) =>
                    setNewRole({ ...newRole, description: e.target.value })
                  }
                />
                <Input
                  placeholder="Created On"
                  value={newRole.createdOn}
                  onChange={(e) =>
                    setNewRole({ ...newRole, createdOn: e.target.value })
                  }
                />
                <Input
                  placeholder="Status"
                  value={newRole.status}
                  onChange={(e) =>
                    setNewRole({ ...newRole, status: e.target.value })
                  }
                />
                <Input
                  type="number"
                  placeholder="Assigned People"
                  value={newRole.assignedPeople}
                  onChange={(e) =>
                    setNewRole({
                      ...newRole,
                      assignedPeople: Number(e.target.value),
                    })
                  }
                />
                <Button onClick={handleAddNew} className="w-full bg-[#238DB2]">
                  Submit
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Card className="shadow-2xl drop-shadow-2xl rounded-lg">
        <CardContent className="divide-y   rounded-md">
          {filterRoles.map((role, index) => (
            <div
              key={role.id}
              className="grid grid-cols-7 items-center gap-4 py-4 px-4 text-sm"
            >
              <div className="col-span-1 flex items-center gap-2">
                <Input type="checkbox" className="w-4 h-4" />
                <span>{index + 1}.</span>
                <Input
                  value={role.role}
                  onChange={(e) =>
                    handleChange(role.id, "role", e.target.value)
                  }
                  readOnly={editingId !== role.id}
                  className="border rounded-xl px-3 py-3 w-full"
                />
              </div>
              <Input
                value={role.description}
                onChange={(e) =>
                  handleChange(role.id, "description", e.target.value)
                }
                readOnly={editingId !== role.id}
                className="border rounded-xl px-3 py-3 col-span-2"
              />
              <Input
                value={role.createdOn}
                onChange={(e) =>
                  handleChange(role.id, "createdOn", e.target.value)
                }
                readOnly={editingId !== role.id}
                className="border rounded-xl px-3 py-2 w-full"
              />
              <Input
                value={role.status}
                onChange={(e) =>
                  handleChange(role.id, "status", e.target.value)
                }
                readOnly={editingId !== role.id}
                className="border rounded-xl px-3 py-2 w-full"
              />
              <Input
                type="number"
                value={role.assignedPeople}
                onChange={(e) =>
                  handleChange(
                    role.id,
                    "assignedPeople",
                    Number(e.target.value)
                  )
                }
                readOnly={editingId !== role.id}
                className="border rounded-xl px-3 py-3 w-full"
              />
              <div className="flex gap-2 border rounded-xl px-3 cursor-pointer w-full">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Eye className="w-4 h-4 " />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setEditingId(editingId === role.id ? null : role.id)
                  }
                  className="cursor-pointer"
                >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AllRoles;
