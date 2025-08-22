import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextAuthProviders from "@/providers/NextAuthProviders";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HealthNest",
   icons: {
    icon: "/Medical-Logo-Graphics-1-29-580x386-removebg-preview (1).png", 
  },
  description: "Take care of your health",
}; 


export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en"> 
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
      <ThemeProvider>
         <NextAuthProviders>

       <Navbar></Navbar>
       <Toaster></Toaster>
        <main className="flex-grow">{children}</main>

        <Footer></Footer>
       </NextAuthProviders>
      </ThemeProvider>
      </body>
    </html>
  );
}
