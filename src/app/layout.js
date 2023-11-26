import { Footer, Header } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Grotto",
  description: "Cheer up, dude. It’s Christmas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col max-w-6xl mx-auto">
        <Header />
        <div className="grow shrink-0">
          <div className="mx-auto max-w-9xl h-full flex flex-col items-center justify-between">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
    
  );
}
