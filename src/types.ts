export type Lane = 'commit' | 'wish'; // จำเป็น(มีกำหนด) | อยากทำ(ว่างค่อยทำ)
export type FocusBucket = 'q' | 'm' | 'l' | null; // ~15 / ~30 / 45+ นาที
export type Recurrence =
  | null
  | { type: 'once'; date: string } // ISO date
  | { type: 'weekly'; weekday: number } // 0-6
  | { type: 'monthly'; day: number }; // 1-31

export interface Task {
  id: string;
  text: string;
  lane: Lane;
  recurrence: Recurrence; // Phase 1: store field, keep UI minimal (logic = Phase 2)
  nextDue: string | null; // Phase 2 fills this
  focusBucket: FocusBucket;
  done: boolean;
  doneAt: number | null;
  lastCompletedAt: number | null;
  createdAt: number;
}
