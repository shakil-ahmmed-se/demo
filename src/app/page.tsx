import Footer from "@/components/login/Footer";
import Header from "@/components/login/Header";
import LoginPage from "@/components/login/Login";
import { AppSidebar } from "@/components/dashboard/Sidebar";
import TopProjectCards from "@/components/dashboard/TopProjectCard";
import ProjectOverview from "@/components/dashboard/ProjectOverView";
import demoImage from "../../public/login/logo.png";
import TeamMemberList from "@/components/dashboard/TeamMemberList";
import ClientOverview from "@/components/dashboard/ClientOverView";
import Expense from "@/components/dashboard/Expense";
import ActivityLog from "@/components/dashboard/ActivityLog";
import RevenueChart from "@/components/dashboard/RevenuChart";
import BillingHistoryButton from "@/components/dashboard/CommonButton";

export default function Home() {
  const teamMembers = Array(6).fill({
    name: "Deanna Jones",
    image: "/dashboard/profile.jpeg",
  });

const projects = [
    { name: "HR Management", progress: 62, paymentAmount: "$1200" },
    { name: "Fitness App", progress: 45, paymentAmount: "" },
    { name: "Survey Software", progress: 100, paymentAmount: "" },
    { name: "File Manager", progress: 75, paymentAmount: "" },
  ];
  return (
    <div className="mx-4">
    
      <TopProjectCards />
      <div className="flex w-full gap-x-4 overflow-hidden">
        <div className="w-4/5">
          <ProjectOverview
            projectName= {projects[0].name}
            workingProgress={75}
            paymentProgress={50}
            paymentAmount="$5,000"
            totalMembers={3}
            teamMembers={teamMembers}
          />
          <ClientOverview
            clientName="Mark Lee"
            companyName="Company Name"
            clientImage="/dashboard/profile.jpeg"
            dueAmount="$1850"
            projects={[
              { name: "HR Management", progress: 62, paymentAmount: "$1200" },
              { name: "Fitness App", progress: 45, paymentAmount: "" },
              { name: "Survey Software", progress: 100, paymentAmount: "" },
              { name: "File Manager", progress: 75, paymentAmount: "" },
            ]}
            clients={["Mark Lee", "John Doe", "Jane Smith"]}
          />
          <div className="grid grid-cols-2 gap-5">
            <div className="w-full">
              <Expense />
            </div>
            <div className="w-full">
              <ActivityLog />
            </div>
          </div>
          <RevenueChart />
        </div>
        <div className="">
          <TeamMemberList teamMembers={teamMembers} />
          <TeamMemberList teamMembers={teamMembers} />
          <BillingHistoryButton />
          <BillingHistoryButton />
        </div>
      </div>
    </div>
  );
}
