"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const clubData = {
  astro: { name: "CLub 1", description:"info"},
  aero: { name: "Club 2", description:"info" },
  robotics: { name: "Club 3", description:"info" },
  coding: { name: "Club 3", description:"info" },
  gaming: { name: "Club 4", description:"info" },
};

export default function ClubMap() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 1", "end 1.1"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [selectedClub, setSelectedClub] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const showClub = (key, cx, cy) => {
    const OFFSET_X = 130; // pixels right of the dot
    const OFFSET_Y = -30; // slight upward offset

    setSelectedClub(key);
    setPosition({
      top: cy + OFFSET_Y+100,
      left: cx + OFFSET_X-100,
    });
  };

  return (
    <div ref={containerRef} className="relative w-full flex justify-center py-20 text-white min-h-[1500px]">
      {/* ✅ Floating Club Info next to dot */}
      {selectedClub && (
        <div
          className="absolute z-50 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-[280px]"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          <h3 className="text-lg font-semibold text-white mb-1">{clubData[selectedClub].name}</h3>
          <p className="text-white text-sm mb-3">{clubData[selectedClub].description}</p>
          <button onClick={() => setSelectedClub(null)} className="text-cyan-300 underline text-sm">Close</button>
        </div>
      )}

      <svg
        
        viewBox="0 0 300 1300"
        className="absolute h-[1500px] w-[1000px] left-[-400px]"
        fill="none"
        stroke="white"
        strokeWidth={2}
      >
        <motion.path
          d="
            M100 0
            Q -500 100, 100 200
            Q 560 300, 100 400
            Q -600 500, 100 600
            Q 560 700, 100 800
            Q -500 900, 100 1000
            Q 260 1100, 100 1200
          "
          style={{ pathLength }}
        />

        <g>
          {[
            { cx: 100, cy: 200, key: "astro" },
            { cx: 100, cy: 400, key: "aero" },
            { cx: 100, cy: 600, key: "robotics" },
            { cx: 100, cy: 800, key: "coding" },
            { cx: 100, cy: 1000, key: "gaming" },
          ].map(({ cx, cy, key }) => (
            <g key={key}>
              <motion.circle
                cx={cx}
                cy={cy}
                r="10"
                fill="#fff"
                className="cursor-pointer hover:fill-black transition"
                onClick={() => showClub(key, cx, cy)}
              />
              <foreignObject x={cx + 20} y={cy - 10} width="150" height="50">
                <div className="text-sm text-white">{clubData[key].name}</div>
              </foreignObject>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
