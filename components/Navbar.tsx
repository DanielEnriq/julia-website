import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "var(--space-sm)",
          paddingBottom: "var(--space-sm)",
        }}
      >
        {/* Name / Identity */}
        <Link
          href="/#about"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.25rem",
            color: "var(--color-text-primary)",
          }}
        >
          Julia Kim
        </Link>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "var(--space-md)",
            fontSize: "0.95rem",
          }}
        >
          <Link href="/#about">About</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}