import CatBase, { Blush, HappyEyes, Nose, SmileMouth } from "./CatBase";
import type { CatFaceProps } from "./types";

/** ดีใจ — ใช้ตอนทำงานเสร็จ (state: done) */
export default function HappyCat({ size, className, onClick }: CatFaceProps) {
  return (
    <CatBase size={size} className={className} onClick={onClick} label="เหมียวดีใจ">
      <HappyEyes />
      <Blush />
      <Nose />
      <SmileMouth />
      {/* หัวใจลอย */}
      <g className="cat-hearts">
        <path
          d="M158 92c0-4 6-4 6 0 0-4 6-4 6 0 0 5-6 8-6 8s-6-3-6-8z"
          fill="#E48AA6"
        />
        <path
          d="M70 88c0-4 6-4 6 0 0-4 6-4 6 0 0 5-6 8-6 8s-6-3-6-8z"
          fill="#EFA36A"
        />
        <path
          d="M120 62c0-4 6-4 6 0 0-4 6-4 6 0 0 5-6 8-6 8s-6-3-6-8z"
          fill="#E48AA6"
        />
      </g>
    </CatBase>
  );
}
