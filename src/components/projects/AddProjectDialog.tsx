"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


// Define the type for a project (same as in ProjectTable)
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

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}

export default function AddProjectModal({
  isOpen,
  onClose,
  onAddProject,
}: AddProjectModalProps) {
  const [formData, setFormData] = useState({
    project: "",
    clientName: "",
    totalAmount: 0,
    paid: 0,
    dueAmount: 0,
    date: "",
    assignTo: "",
    company: "",
    status: "Active" as "Active" | "Inactive",
  });

  // Sample data for dropdowns (replace with API data in a real app)
  const clients = ["Deniel Mark", "John Doe", "Jane Smith"];
  const members = ["05", "10", "15", "20", "25", "30", "50", "100"];
  const companies = ["Company A", "Company B", "Company C"];
  const statuses = ["Active", "Inactive"];


  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const newProject: Project = {
      id: Date.now(), // Simple ID generation (replace with a better method for production)
      project: formData.project,
      clientName: formData.clientName,
      totalAmount: Number(formData.totalAmount),
      paid: Number(formData.paid),
      dueAmount: Number(formData.dueAmount),
      date: formData.date,
      assignTo: formData.assignTo,
      status: formData.status,
    };

    onAddProject(newProject);
    onClose();
    // Reset form
    setFormData({
      project: "",
      clientName: "",
      totalAmount: 0,
      paid: 0,
      dueAmount: 0,
      date: "",
      assignTo: "",
      company: "",
      status: "Active",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full rounded-xl border border-[#238DB2]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add Project</DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
           
          </Button>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {/* Project Name */}
          <div className="col-span-1">
            <Label htmlFor="project" className="text-sm font-medium">
              Project Name
            </Label>
            <Input
              id="project"
              placeholder="Enter Name"
              value={formData.project}
              onChange={(e) => handleInputChange("project", e.target.value)}
              className="mt-1 border-[#E5E7EB] rounded-xl"
            />
          </div>

          {/* Client */}
          <div className="col-span-1">
            <Label htmlFor="clientName" className="text-sm font-medium">
              Client
            </Label>
            <Select
              value={formData.clientName}
              onValueChange={(value) => handleInputChange("clientName", value)}
              
            >
              <SelectTrigger className="mt-1 border-[#E5E7EB] rounded-xl w-full">
                <SelectValue placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent>
                {clients.map((client) => (
                  <SelectItem key={client} value={client}>
                    {client}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Total Budget */}
          <div className="col-span-1">
            <Label htmlFor="totalAmount" className="text-sm font-medium">
              Total Budget
            </Label>
            <Input
              id="totalAmount"
              type="number"
              placeholder="Total Budget"
              value={formData.totalAmount || ""}
              onChange={(e) =>
                handleInputChange("totalAmount", Number(e.target.value))
              }
              className="mt-1 border-[#E5E7EB] rounded-xl"
            />
          </div>

          {/* Paid Amount */}
          <div className="col-span-1">
            <Label htmlFor="paid" className="text-sm font-medium">
              Paid Amount
            </Label>
            <Input
              id="paid"
              type="number"
              placeholder="Enter Amount"
              value={formData.paid || ""}
              onChange={(e) => handleInputChange("paid", Number(e.target.value))}
              className="mt-1 border-[#E5E7EB] rounded-xl"
            />
          </div>

          {/* Due Date */}
          <div className="col-span-1">
            <Label htmlFor="date" className="text-sm font-medium">
              Due Date
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              className="mt-1 border-[#E5E7EB] rounded-xl"
            />
          </div>

          {/* Add Member */}
          <div className="col-span-1">
            <Label htmlFor="assignTo" className="text-sm font-medium">
              Add Member
            </Label>
            <Select
              value={formData.assignTo}
              onValueChange={(value) => handleInputChange("assignTo", value)}
            >
              <SelectTrigger className="mt-1 border-[#E5E7EB] rounded-xl w-full">
                <SelectValue placeholder="Select Member" />
              </SelectTrigger>
              <SelectContent>
                {members.map((member) => (
                  <SelectItem key={member} value={member}>
                    {member}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <Label htmlFor="company" className="text-sm font-medium">
              Company
            </Label>
            <Input
              id="company"
              placeholder="Enter Company Name"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="mt-1 border-[#E5E7EB] rounded-xl"
            />
          </div>

          {/* Status */}
          <div className="col-span-1">
            <Label className="text-sm font-medium">Status</Label>
            <RadioGroup
              value={formData.status}
              onValueChange={(value) =>
                handleInputChange("status", value as "Active" | "Inactive")
              }
              className="flex space-x-4 mt-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Active" id="active" />
                <Label htmlFor="active">Active</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Inactive" id="inactive" />
                <Label htmlFor="inactive">Inactive</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-[#238DB2] text-[#238DB2]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-[#238DB2] text-white hover:bg-[#1E7A9A]"
          >
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}