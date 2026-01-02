import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Julia Kim — Student Journalist",
  description:
    "Portfolio of Julia Kim, student journalist focusing on culture, social justice, and long‑form reporting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
