import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grotto",
  description: "Cheer up, dude. It’s Christmas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grow shrink-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl h-full flex flex-col items-center justify-between">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
