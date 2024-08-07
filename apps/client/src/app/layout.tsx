"use client";
import { RecoilRoot } from "recoil";
import { Header } from "../components/common/header";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <html lang="en">
          <body className="">
            <Header />
            <div className="h-full pt-16">{children}</div>
            <ToastContainer />
          </body>
        </html>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
