"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StoryGrid from "../components/StoryGrid";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* HERO / ABOUT */}
      <section
        id="about"
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          alignItems: "center",
          gap: "var(--space-xl)",
          minHeight: "70vh",
        }}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ maxWidth: "40rem" }}
        >
          <h1>Journalism at the intersection of social justice</h1>

          <p
            style={{
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-md)",
            }}
          >
            I am Julia Kim, an undergraduate student at New York University
            studying Journalism and Gender & Sexuality Studies.
          </p>
            <p
            style={{
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-md)",
            }}
          >
            Born and raised
            in Missouri, I am passionate about journalism at the intersection of
            social justice and writing stories that center the experiences of
            historically marginalized communities. I currently work as the
            Culture Editor for NYU’s independent student newspaper Washington
            Square News, where my reporting takes the form of long-form feature
            stories on social-political issues affecting the NYU and NYC
            communities, with an emphasis on covering the criminal legal system.
          </p>

          <p>
            <a href="#portfolio">View selected work →</a>
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          style={{
            position: "relative",
            width: "100%",
            height: "min(520px, 70vh)",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/portrait1.jpg"
            alt="Portrait of Julia Kim"
            fill
            priority
            style={{ objectFit: "cover" }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,

            }}
          />
        </motion.div>

        {/* Responsive adjustments */}
        <style jsx>{`
          @media (max-width: 1023px) {
            section {
              gap: var(--space-lg);
            }
          }

          @media (max-width: 767px) {
            section {
              grid-template-columns: 1fr;
            }

            h1 {
              font-size: 2.2rem;
            }
          }
        `}</style>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="container"
        style={{ marginTop: "var(--space-md)" }}
      >
        <StoryGrid />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="container"
        style={{ marginBottom: "var(--space-2xl)" }}
      >
        <ContactSection />
      </section>
    </>
  );
}