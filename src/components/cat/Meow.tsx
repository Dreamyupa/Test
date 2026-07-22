import { useEffect, useRef, useState } from "react";
import { CAT_BY_MOOD, POKE_REACTIONS } from "./index";
import type { CatFaceProps, CatMood } from "./types";
import "./cat.css";

type MeowProps = {
  /** สถานะจริงของแอป — ไม่สุ่ม เพราะมันคือการสื่อสารกับผู้ใช้ */
  mood?: CatMood;
  size?: number;
  /** ข้อความที่เหมียวพูด (ควบคุมจากข้างนอก) */
  onPoke?: (line: string) => void;
};

const POKE_LINES = [
  "จิ้มเบา ๆ นะ~",
  "เมี๊ยว~",
  "สู้ ๆ เลือกอันเดียวพอ",
  "เก่งมากกก",
  "วันนี้ทำได้แน่",
  "อย่าเพิ่งไปเล่นมือถือน้า",
];

export default function Meow({ mood = "sleep", size = 140, onPoke }: MeowProps) {
  const [poke, setPoke] = useState<React.FC<CatFaceProps> | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const handlePoke = () => {
    setPoke((prev: React.FC<CatFaceProps> | null) => {
      const pool = POKE_REACTIONS.filter((r) => r !== prev);
      return pool[Math.floor(Math.random() * pool.length)];
    });
    onPoke?.(POKE_LINES[Math.floor(Math.random() * POKE_LINES.length)]);

    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPoke(null), 1400);
  };

  // เคลียร์ timer ตอน unmount กัน memory leak
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const Cat = poke ?? CAT_BY_MOOD[mood];

  return (
    <button
      type="button"
      className={`cat-poke ${poke ? "is-reacting" : ""}`}
      onClick={handlePoke}
      aria-label="จิ้มเหมียว"
    >
      <Cat size={size} />
    </button>
  );
}
