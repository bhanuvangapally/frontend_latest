import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neumage.ai | Agentic AI Platform",
  description: "Neumage powers intelligent systems with an agentic AI platform that develops and deploys production-ready perception pipelines and embedded firmware.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-[#333] antialiased`}>
        {children}
      </body>
    </html>
  );
}
