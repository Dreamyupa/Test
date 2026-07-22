import CatBase, { Nose } from "./CatBase";
import { CAT } from "./CatBase";
import type { CatFaceProps } from "./types";

/**
 * กำลังคิด — ใช้ตอนกด "เลือกให้เลย 🎲" ระหว่างสุ่ม
 * (สื่อถึง pain point ตรง ๆ: เลือกไม่ถูก เดี๋ยวเหมียวเลือกให้)
 */
export default function ThinkingCat({ size, className, onClick }: CatFaceProps) {
  return (
    <CatBase size={size} className={className} onClick={onClick} label="เหมียวกำลังคิด">
      {/* ตาเหลือบขึ้นมุมบน */}
      <path
        d="M86 112 Q100 99 114 112 Q100 121 86 112 Z"
        fill="#EFA93A"
      />
      <ellipse cx="106" cy="107" rx="4.5" ry="7.5" fill={CAT.ink} />
      <path
        d="M126 112 Q140 99 154 112 Q140 121 126 112 Z"
        fill="#EFA93A"
      />
      <ellipse cx="144" cy="107" rx="4.5" ry="7.5" fill={CAT.ink} />
      {/* คิ้วยกข้างเดียว */}
      <path
        d="M128 94 q10 -5 20 -1"
        stroke={CAT.ink}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <Nose />
      {/* ปากเบ้ข้าง */}
      <path
        d="M110 142 q10 4 20 -2"
        stroke="#A05C43"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* จุดคิด ... */}
      <g className="cat-think" fill={CAT.collar}>
        <circle cx="176" cy="70" r="4" />
        <circle cx="189" cy="58" r="5.5" />
        <circle cx="204" cy="44" r="7" />
      </g>
    </CatBase>
  );
}
