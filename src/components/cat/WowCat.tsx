import CatBase, { OpenEyes } from "./CatBase";
import { CAT } from "./CatBase";
import type { CatFaceProps } from "./types";

/** ตกใจ/ว้าว — ใช้ตอนวอกแวก (distracted) หรือปลดล็อกสถิติใหม่ */
export default function WowCat({ size, className, onClick }: CatFaceProps) {
  return (
    <CatBase size={size} className={className} onClick={onClick} label="เหมียวตกใจ">
      <OpenEyes dilate={1.35} />
      {/* คิ้วยกสูง */}
      <path
        d="M88 92 q11 -6 21 -2 M152 92 q-11 -6 -21 -2"
        stroke={CAT.ink}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M113 127 Q120 124 127 127 Q124 136 120 138 Q116 136 113 127 Z"
        fill="#C86A54"
      />
      {/* ปากอ้ากลม */}
      <ellipse cx="120" cy="146" rx="7" ry="9" fill="#A05C43" />
      {/* ประกายตกใจ */}
      <g className="cat-spark" stroke={CAT.bell} strokeWidth="3" strokeLinecap="round">
        <path d="M172 66 l10 -10 M182 78 l12 -4 M166 52 l3 -13" />
      </g>
    </CatBase>
  );
}
