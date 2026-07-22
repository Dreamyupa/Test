import CatBase, { Blush, Nose, OpenEyes } from "./CatBase";
import { CAT } from "./CatBase";
import type { CatFaceProps } from "./types";

/**
 * งอน (ไม่ใช่โกรธจริง) — ใช้ตอนจิ้มรัว ๆ เท่านั้น
 * ห้ามใช้ตอนงานค้าง/ทำไม่เสร็จ เพราะเหมียวต้องเชียร์ ไม่ตำหนิ
 */
export default function AngryCat({ size, className, onClick }: CatFaceProps) {
  return (
    <CatBase size={size} className={className} onClick={onClick} label="เหมียวงอน">
      <OpenEyes dilate={0.9} />
      {/* คิ้วขมวด */}
      <path
        d="M88 96 l20 7 M152 96 l-20 7"
        stroke={CAT.ink}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Blush />
      <Nose />
      {/* ปากจุ๊บงอน */}
      <path
        d="M112 142 q8 -7 16 0"
        stroke="#A05C43"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* สัญลักษณ์หัวร้อนแบบการ์ตูน */}
      <g className="cat-anger" stroke="#E4576F" strokeWidth="3.5" strokeLinecap="round" fill="none">
        <path d="M166 74 v10 M166 74 h10 M172 80 l8 8 M176 74 l6 -6" />
      </g>
    </CatBase>
  );
}
