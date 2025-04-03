import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Main from "@/component/main";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata={
  title:"Sunil",
  description:"hii hello this is my personal portfolio"
}

export default function RootLayout({ children }) {
  return (
    <Main children={children} geistSans={geistSans} geistMono={geistMono}/>
  );
}
