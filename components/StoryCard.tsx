"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Story } from "../content/stories";

type StoryCardProps = {
  story: Story;
};

function formatMonthYear(dateString: string) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function StoryCard({ story }: StoryCardProps) {
  const formattedDate = formatMonthYear(story.date);

  return (
    <motion.a
      href={story.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        story-card
        group
        relative
        block
        bg-[var(--color-bg)]
        transition-transform
        duration-300
        ease-out
        hover:-translate-y-[2px]
      "
    >
      {/* GRID */}
      <div className="relative grid h-[240px] w-full grid-cols-[32%_48px_1fr]">
        {/* IMAGE COLUMN — THIS NOW GROWS */}
        <div
          className="
            relative
            h-full
            w-full
            overflow-hidden
            transition-transform
            duration-500
            ease-out
            will-change-transform
            group-hover:scale-[1.05]
          "
        >
          <Image
            src={story.image}
            alt={story.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />
        </div>

        {/* INVISIBLE SPACER */}
        <div aria-hidden />

        {/* TEXT */}
        <div className="flex items-center">
          <div
            className="
              max-w-xl
              py-10
              transition-transform
              duration-400
              ease-out
              group-hover:-translate-x-[6px]
            "
          >
            <h3 className="text-2xl font-medium leading-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
              {story.title}
            </h3>

            <p className="mt-2 text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
              {formattedDate && (
                <>
                  {formattedDate}
                  {" · "}
                </>
              )}
              {story.outlet}
              {story.role && ` · ${story.role}`}
            </p>

            <p className="mt-4 line-clamp-2 text-base leading-relaxed text-[var(--color-text-subtle)]">
              {story.dek}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
}