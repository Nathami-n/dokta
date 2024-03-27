
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components";
import ToastProvider from './ToastProvider/ToastProvider'
import getCurrentUser from "./actions/getCurrentUserAction";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dokta",
  description: "This is an application where users can book for consultations and doctors can float services with the location and rating",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  console.log(user)
  return (
    <html lang="en">
      <body className={inter.className}>
     
          <NavBar />
          <ToastProvider />
          {children}
       
      </body>
    </html>
  );
}
