"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

import { AppSidebar } from "@/components/dashboard/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/dashboard/Header";

const poppin = Poppins({
  variable: "--poppin",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CodenVibe",
  description: "CodenVibe Dashboard",
};

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const isAuthPage = pathname.startsWith("/login");

  return (
    <html lang="en">
      <body className={poppin.className}>
        {!isAuthPage && <Header />}
        <SidebarProvider>
          {/* {!isAuthPage && <AppSidebar />}  
          <main className={`flex-1 ${isAuthPage ? "w-full" : ""}`}> 
            {children}
          </main> */}

          <div className="flex flex-col h-lvh w-full">
            <div className="flex flex-1 overflow-hidden  ">
              {!isAuthPage && <AppSidebar />}
              <main className={`flex-1 overflow-y-auto  bg-gray-50   mt-24`}>
                {children}
              </main>
            </div>
          </div>
          
        </SidebarProvider>
      </body>
    </html>
  );
}
