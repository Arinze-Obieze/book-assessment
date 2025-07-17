import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SupabaseProvider } from "@/components/SupabaseProvider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book App",
  description: "Book App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` min-h-screen bg-gray-900 text-gray-100  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <SupabaseProvider> 
          <Header />
          {children}
          </SupabaseProvider>
   
      </body>
    </html>
  );
}
