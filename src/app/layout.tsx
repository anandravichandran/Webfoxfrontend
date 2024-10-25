
import { FloatingNav } from "@/src/components/FloatingNav";
import { navItems } from "@/src/data";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./style.css";

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
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


