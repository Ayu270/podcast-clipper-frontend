"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface BackgroundRippleEffectProps
  extends React.HTMLAttributes<HTMLDivElement> {
  rows?: number;
  cols?: number;
  cellSize?: number;
}

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
  className,
  ...props
}: BackgroundRippleEffectProps) => {
  const [activeCell, setActiveCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCell({
        row: Math.floor(Math.random() * rows),
        col: Math.floor(Math.random() * cols),
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [rows, cols]);

  const rootClassName = [
    "pointer-events-none",
    "absolute",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "overflow-hidden",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClassName}
      {...props}
    >
      <div
        className="absolute left-1/2 top-0 grid -translate-x-1/2"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;

          const isActive =
            activeCell?.row === row &&
            activeCell?.col === col;

          return (
            <motion.div
              key={`${row}-${col}`}
              //className="border border-black/[0.045]"
              className="border border-black/[0.035] bg-transparent"
              animate={{
                backgroundColor: isActive
                  ? "rgba(0,0,0,0.08)"
                  : "rgba(0,0,0,0)",
                opacity: isActive ? 1 : 0.65,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              style={{
                width: cellSize,
                height: cellSize,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};