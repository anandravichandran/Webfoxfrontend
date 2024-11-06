
import { FloatingNav } from "@/src/components/FloatingNav";
import { navItems } from "@/src/data";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./style.css";
import "react-toastify/dist/ReactToastify.css" // React Toastify
import {ToastContainer} from 'react-toastify'; // Import the ToastContainer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebFoxShield",
  description: "WebFoxShield",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-black"> {/* Corrected bg-black-100 */}
            <FloatingNav navItems={navItems} /> {/* Prop name is correct */}
            {children}
            {/* Add ToastContainer here to make toast notifications available globally */}
            <ToastContainer
            position="top-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
           />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


