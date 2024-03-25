
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components";
import ToastProvider from './ToastProvider/ToastProvider'
import UserSessionProvider from "./SessionProvider/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dokta",
  description: "This is an application where users can book for consultations and doctors can float services with the location and rating",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserSessionProvider>
          <NavBar />
          <ToastProvider />
          {children}
        </UserSessionProvider>

      </body>
    </html>
  );
}
