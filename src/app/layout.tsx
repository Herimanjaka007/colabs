import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collabs_",
  description: "Collaborative video calling app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: "#101828",
          }
        }}
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 antialiased`}
        >
          {children}
          <Toaster
            toastOptions={{
              classNames: {
                error: "bg-red-500 text-white",
                success: "bg-green-500 text-white !important",
                info: "bg-blue-500 text-white",
                default: "bg-gray-800 text-white",
              }
            }}
          />
        </body>
      </ClerkProvider>
    </html>
  );
}
