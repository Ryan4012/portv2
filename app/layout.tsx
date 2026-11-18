import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import TerminalNav from "@/components/TerminalNav";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className="transition-colors">
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 py-10">
            {children}
            <TerminalNav />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}