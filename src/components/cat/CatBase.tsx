import type { ReactNode } from "react";
import "./cat.css";

/**
 * CatBase — ตัวเหมียวเต็มตัว (หัว หู ตัว ขา หาง ปลอกคอ กระดิ่ง หนวด)
 * วาดที่นี่ที่เดียว ไฟล์อารมณ์ทั้ง 6 แค่ส่ง "หน้า" เข้ามาทาง children
 *
 * viewBox 0 0 240 240 — จุดอ้างอิงของหน้า:
 *   ตาซ้าย  ~ (101, 112)   ตาขวา ~ (139, 112)
 *   จมูก    ~ (120, 131)   ปาก   ~ (120, 138)
 *   แก้ม    ~ (82, 135) / (158, 135)
 */

export const CAT = {
  fur: "#E9A86A",
  furDark: "#CF8038",
  furShade: "#D89250",
  cream: "#F7E6CE",
  earInner: "#E8895E",
  stripe: "#C9762F",
  whisker: "#E4C39A",
  collar: "#2F5D50",
  bell: "#E0A83D",
  bellDark: "#B77F1E",
  ink: "#2E2620",
  blush: "#F2A07E",
} as const;

export type CatBaseProps = {
  size?: number;
  className?: string;
  /** หน้า (ตา ปาก ของประกอบ) ที่จะซ้อนทับบนตัวเหมียว */
  children?: ReactNode;
  /** อุปกรณ์ประกอบที่ต้องอยู่ "หลัง" ตัวเหมียว เช่น ผีเสื้อ วงเวลา */
  behind?: ReactNode;
  label?: string;
  onClick?: () => void;
};

export default function CatBase({
  size = 120,
  className = "",
  children,
  behind,
  label = "เหมียว",
  onClick,
}: CatBaseProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={`cat ${className}`}
      role="img"
      aria-label={label}
      onClick={onClick}
    >
      {behind}

      <g className="cat-body">
        {/* หาง */}
        <g className="cat-tail">
          <path
            d="M170 196 C 206 200 222 152 206 128 C 200 118 186 122 190 134 C 200 154 186 176 164 178 Z"
            fill={CAT.fur}
          />
          <path
            d="M198 150 q8 3 6 12 M194 168 q8 2 4 11"
            stroke={CAT.furDark}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* ลำตัว */}
        <path
          d="M62 158 C 44 178 44 204 64 214 C 94 228 148 228 176 214 C 196 204 196 178 178 158 C 176 152 64 152 62 158 Z"
          fill={CAT.fur}
        />
        {/* อกสีครีม */}
        <path
          d="M120 152 C 101 158 97 192 113 208 C 118 212 122 212 127 208 C 143 192 139 158 120 152 Z"
          fill={CAT.cream}
        />

        {/* ขาหน้า */}
        <ellipse cx="94" cy="216" rx="17" ry="11" fill={CAT.fur} />
        <ellipse cx="146" cy="216" rx="17" ry="11" fill={CAT.fur} />
        <path
          d="M88 213 v7 M94 214 v8 M100 213 v7 M140 213 v7 M146 214 v8 M152 213 v7"
          stroke={CAT.furShade}
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* หู */}
        <polygon points="76,74 60,28 108,60" fill={CAT.fur} />
        <polygon points="164,74 180,28 132,60" fill={CAT.fur} />
        <polygon points="82,68 70,38 102,60" fill={CAT.earInner} />
        <polygon points="158,68 170,38 138,60" fill={CAT.earInner} />

        {/* หัว */}
        <ellipse cx="120" cy="112" rx="53" ry="49" fill={CAT.fur} />

        {/* ขนแก้มหยัก */}
        <path
          d="M72 120 l-11 6 l10 3 l-9 7 l11 2"
          fill="none"
          stroke={CAT.fur}
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M168 120 l11 6 l-10 3 l9 7 l-11 2"
          fill="none"
          stroke={CAT.fur}
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* ลายหน้าผาก */}
        <path
          d="M120 66 v16 M107 68 l5 14 M133 68 l-5 14"
          stroke={CAT.stripe}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* รองตาสีครีม */}
        <ellipse cx="107" cy="133" rx="17" ry="14" fill={CAT.cream} />
        <ellipse cx="133" cy="133" rx="17" ry="14" fill={CAT.cream} />

        {/* ปลอกคอ + กระดิ่ง (สีโฟกัส/รางวัลของแอป) */}
        <path
          d="M86 160 Q120 172 154 160"
          stroke={CAT.collar}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="120" cy="169" r="7" fill={CAT.bell} />
        <path d="M120 165 v8" stroke={CAT.bellDark} strokeWidth="1.5" />
        <circle cx="120" cy="171" r="1.6" fill={CAT.bellDark} />

        {/* ── หน้า (ส่งเข้ามาจากไฟล์อารมณ์) ── */}
        {children}

        {/* หนวด — วาดทับหน้าเสมอ */}
        <path
          d="M90 130 l-30 -5 M90 135 l-32 1 M92 140 l-30 8
             M150 130 l30 -5 M150 135 l32 1 M148 140 l30 8"
          stroke={CAT.whisker}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* ── ชิ้นส่วนหน้าที่ใช้ซ้ำได้ในหลายอารมณ์ ── */

export function Nose() {
  return (
    <path
      d="M113 127 Q120 124 127 127 Q124 136 120 138 Q116 136 113 127 Z"
      fill="#C86A54"
    />
  );
}

export function Blush() {
  return (
    <>
      <ellipse cx="82" cy="135" rx="11" ry="6.5" fill={CAT.blush} />
      <ellipse cx="158" cy="135" rx="11" ry="6.5" fill={CAT.blush} />
    </>
  );
}

/** ตากลมเปิด — dilate > 1 = ตาโต (ตกใจ/ตื่นเต้น), < 1 = หรี่ตา */
export function OpenEyes({ dilate = 1 }: { dilate?: number }) {
  const eye = (cx: number) => (
    <g key={cx}>
      <path
        d={`M${cx - 15} 112 Q${cx} 99 ${cx + 15} 112 Q${cx} 121 ${cx - 15} 112 Z`}
        fill="#EFA93A"
      />
      <ellipse
        cx={cx}
        cy="112"
        rx={4.5 * dilate}
        ry={8 * dilate}
        fill={CAT.ink}
      />
      <circle cx={cx + 3} cy="108" r="2.4" fill="#fff" />
    </g>
  );
  return (
    <>
      {eye(101)}
      {eye(139)}
    </>
  );
}

/** ตาหยีเป็นรูปตัว U คว่ำ (มีความสุข) */
export function HappyEyes() {
  return (
    <>
      <path
        d="M90 113 q11 -12 21 0"
        stroke={CAT.ink}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M129 113 q11 -12 21 0"
        stroke={CAT.ink}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </>
  );
}

/** ยิ้ม 3 (ปากแมว) */
export function SmileMouth() {
  return (
    <path
      d="M120 138 q-9 8 -16 3 M120 138 q9 8 16 3"
      stroke="#A05C43"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
  );
}
