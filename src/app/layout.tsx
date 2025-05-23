import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/dashboard/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/dashboard/Header";
import ClientLayout from "@/components/ClientLayout";


const poppin = Poppins({
  variable: "--poppin",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "CodenVibe",
  description: "CodenVibe Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={poppin.className}
      >
        {children}
      </body> */}

      {/* <body className={poppin.className}>
          <Header/>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigge />
            {children}
          </main>
        </SidebarProvider>
      </body> */}
      <body className={poppin.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>

    </html>
  );
}
