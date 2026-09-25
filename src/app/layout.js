import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBare from "./component/NavBare";
import CardProvider from "./component/context/CardContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FITLOG",
  description: "Workout Library",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#121212] text-white"
      >
        <CardProvider>
          <NavBare />

          <main className="container mx-auto">
            {children}
          </main>
        </CardProvider>
      </body>
    </html>
  );
}