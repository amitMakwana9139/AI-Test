import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { SupportChatbox } from "@/components/support-chatbox";
import { AuthProvider } from "@/app/context/AuthContext"; // ✅ Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lifeswap",
  description: "Claim your maximum refund",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider> {/* ✅ Wrap your app here */}
            {children}
            <SupportChatbox />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
