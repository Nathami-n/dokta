
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components";
import {authOptions} from '@/app/api/auth/[...nextauth]/authOptions'
import { getServerSession } from "next-auth";
import ToastProvider from './ToastProvider/ToastProvider'
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
   const session = await getServerSession(authOptions);



    return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar session={session}/>
          <ToastProvider />
          {children}
       
      </body>
    </html>
  );
}
