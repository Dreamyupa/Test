export type CatFaceProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
};

/** ชื่ออารมณ์ทั้งหมด ใช้กับ state ของแอปได้ */
export type CatMood =
  | "happy"
  | "sleep"
  | "love"
  | "angry"
  | "thinking"
  | "wow";
