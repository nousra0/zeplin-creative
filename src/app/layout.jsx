import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./bootstrap-client";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Zeplin Creative",
  description: "Zeplin Creative",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
