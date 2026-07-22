import CatBase, { Blush, Nose, SmileMouth } from "./CatBase";
import type { CatFaceProps } from "./types";

/** ตาหัวใจ — ใช้ตอนจิ้ม หรือทำครบเป้าของวัน */
export default function LoveCat({ size, className, onClick }: CatFaceProps) {
  const heartEye = (cx: number) => (
    <path
      key={cx}
      d={`M${cx} 105
          c-3.5 -5 -12 -3 -12 4
          c0 6 8 11 12 14
          c4 -3 12 -8 12 -14
          c0 -7 -8.5 -9 -12 -4 z`}
      fill="#E4576F"
    />
  );
  return (
    <CatBase size={size} className={className} onClick={onClick} label="เหมียวตาหัวใจ">
      {heartEye(101)}
      {heartEye(139)}
      <Blush />
      <Nose />
      <SmileMouth />
    </CatBase>
  );
}
