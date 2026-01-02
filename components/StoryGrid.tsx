"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import StoryCard from "./StoryCard";
import { stories, Story } from "../content/stories";

/* ---------- Helpers ---------- */

function groupByOutlet(stories: Story[]) {
  return {
    wsn: stories.filter(
      (s) => s.outlet === "Washington Square News"
    ),
    npr: stories.filter(
      (s) => s.outlet === "NPR Radio Catskill"
    ),
  };
}

/* ---------- Section Component ---------- */

function StorySection({
  id,
  title,
  subtitle,
  stories,
}: {
  id: "wsn" | "npr";
  title: string;
  subtitle?: string;
  stories: Story[];
}) {
  return (
    <section id={id} className="story-section">
      <div className="container">
        <header className="story-section-header">
          <h2>{title}</h2>
          {subtitle && (
            <p className="story-section-subtitle">{subtitle}</p>
          )}
        </header>

        <div className="story-list">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Main Grid ---------- */

export default function StoryGrid() {
  const grouped = groupByOutlet(stories);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeOutlet, setActiveOutlet] = useState<
    "wsn" | "npr"
  >("wsn");

  /* Rail + fade lifecycle */
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 60%", "end 40%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.85, 0.95],
    [0, 1, 1, 0]
  );

  /* Active section detection */
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "#wsn, #npr"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveOutlet(
              entry.target.id as "wsn" | "npr"
            );
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.01,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="relative">
      {/* STICKY RAIL + INDICATOR */}
      <div className="story-section-rail">
        <motion.div
          className="story-section-rail-inner"
          style={{ opacity }}
        >
          {/* OUTLET INDICATOR */}
          <div className="story-section-indicator">
            <a
              href="#wsn"
              className={activeOutlet === "wsn" ? "active" : ""}
            >
              WSN
            </a>
            <a
              href="#npr"
              className={activeOutlet === "npr" ? "active" : ""}
            >
              NPR
            </a>
          </div>

          {/* RAIL */}
          <div className="story-section-rail-track">
            <motion.div
              className="story-section-rail-fill"
              style={{ scaleY }}
            />
          </div>
        </motion.div>
      </div>

      {/* CONTENT */}
      <StorySection
        id="wsn"
        title="Washington Square News"
        subtitle="Culture Editor"
        stories={grouped.wsn}
      />

      <StorySection
        id="npr"
        title="NPR Radio Catskill"
        subtitle="Reporter & Producer"
        stories={grouped.npr}
      />
    </div>
  );
}