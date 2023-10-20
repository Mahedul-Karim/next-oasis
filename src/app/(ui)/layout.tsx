import ContextProvider from "@/context/ContextProvider";
import '@/app/globals.css'; 
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import SideNav from "@/components/nav/SideNav";
import BottomNav from "@/components/nav/BottomNav";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "The wild oasis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins text-grey-700 min-h-screen">
        <ContextProvider>
          <Header />
          <main className="grid grid-cols-1 400px:grid-cols-[78px_1fr] 1000px:grid-cols-[250px_1fr] h-[calc(100vh_-_105px)]">
            <SideNav />
            <div className="bg-grey-100 overflow-y-scroll overflow-x-hidden px-5 sm:px-10 py-9" id="main">
              {children}
            </div>
          </main>
          <BottomNav />
        </ContextProvider>
        <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
      </body>
    </html>
  );
}
