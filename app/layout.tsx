import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Shop",
  description: "discover The Best Cars In The Hole World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
