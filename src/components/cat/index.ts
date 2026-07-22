export { default as CatBase, CAT } from "./CatBase";
export { default as HappyCat } from "./HappyCat";
export { default as SleepCat } from "./SleepCat";
export { default as LoveCat } from "./LoveCat";
export { default as AngryCat } from "./AngryCat";
export { default as ThinkingCat } from "./ThinkingCat";
export { default as WowCat } from "./WowCat";
export { default as Meow } from "./Meow";
export type { CatFaceProps, CatMood } from "./types";

import HappyCat from "./HappyCat";
import SleepCat from "./SleepCat";
import LoveCat from "./LoveCat";
import AngryCat from "./AngryCat";
import ThinkingCat from "./ThinkingCat";
import WowCat from "./WowCat";
import type { CatMood, CatFaceProps } from "./types";

/** map อารมณ์ -> component ใช้เลือกตาม state ของแอป (ไม่สุ่ม) */
export const CAT_BY_MOOD: Record<CatMood, React.FC<CatFaceProps>> = {
  happy: HappyCat,
  sleep: SleepCat,
  love: LoveCat,
  angry: AngryCat,
  thinking: ThinkingCat,
  wow: WowCat,
};

/** ชุดรีแอคสำหรับ "ตอนจิ้ม" เท่านั้น — สุ่มได้ */
export const POKE_REACTIONS = [
  HappyCat,
  LoveCat,
  WowCat,
  ThinkingCat,
  AngryCat,
  SleepCat,
];
