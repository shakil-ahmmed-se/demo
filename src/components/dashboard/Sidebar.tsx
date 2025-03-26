'use client'

import { useState } from "react";
import { 
  BarChart2, 
  Briefcase, 
  Users, 
  User, 
  Ticket, 
  DollarSign, 
  Settings,
  Menu as MenuIcon,
  X
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";


const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: BarChart2,
  },
  {
    title: "Project",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "Team Member",
    url: "#",
    icon: Users,
  },
  {
    title: "Client",
    url: "#",
    icon: User,
  },
  {
    title: "Ticket",
    url: "#",
    icon: Ticket,
  },
  {
    title: "Billing",
    url: "#",
    icon: DollarSign,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [activeItem, setActiveItem] = useState("Dashboard")


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="p-2 text-[#126D60] focus:outline-none">
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar
        className={`fixed inset-y-0 left-0 z-40 w-64  border-r transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:w-64`}
      >
        <SidebarContent className="px-5 py-5 font-extrabold">
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg py-5 gap-2 items-center flex font-bold">
              <span className="mt-2">Menu</span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="mt-5">
                {items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className="my-1 active:text-sky-400 rounded-2xl py-1"
                  >
                    <SidebarMenuButton asChild>
                      <Link href={item.url}  onClick={() => setActiveItem(item.title)} className={`flex items-center gap-3 ${
                      activeItem === item.title ? "bg-sky-100 text-sky-400" : "text-gray-600 hover:bg-gray-100"
                    }`}>
                        <item.icon className="h-5 w-5" />
                        <span className="text-lg">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}