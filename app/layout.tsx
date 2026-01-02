import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Julia Kim Portfolio",
  description:
    "Julia Kim, an undergraduate student at New York University studying Journalism and Gender & Sexuality Studies.",
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
