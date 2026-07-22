import CatBase, { Nose } from "./CatBase";
import { CAT } from "./CatBase";
import type { CatFaceProps } from "./types";

/** ง่วง — ใช้ตอนแอปว่าง ไม่มีงาน หรือดึกแล้ว (state: idle/rest) */
export default function SleepCat({ size, className, onClick }: CatFaceProps) {
  return (
    <CatBase size={size} className={className} onClick={onClick} label="เหมียวง่วง">
      {/* ตาปิด — เส้นโค้งลง */}
      <path
        d="M90 110 q11 10 21 0"
        stroke={CAT.ink}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M129 110 q11 10 21 0"
        stroke={CAT.ink}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <Nose />
      {/* ปากอ้าเล็กน้อย */}
      <ellipse cx="120" cy="143" rx="5" ry="6" fill="#A05C43" opacity="0.75" />
      {/* Zzz */}
      <g className="cat-zzz" fill={CAT.collar} fontFamily="system-ui" fontWeight="700">
        <text x="168" y="70" fontSize="20">z</text>
        <text x="184" y="52" fontSize="26">Z</text>
      </g>
    </CatBase>
  );
}
