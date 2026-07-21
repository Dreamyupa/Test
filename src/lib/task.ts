import type { Task, Lane, FocusBucket } from '../types';

export function createTask(
  text: string,
  lane: Lane,
  focusBucket: FocusBucket = null,
): Task {
  return {
    id:
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    text,
    lane,
    recurrence: null,
    nextDue: null,
    focusBucket,
    done: false,
    doneAt: null,
    lastCompletedAt: null,
    createdAt: Date.now(),
  };
}

// Time chip cycles: null → q → m → l → null
const BUCKET_CYCLE: FocusBucket[] = [null, 'q', 'm', 'l'];

export function nextBucket(b: FocusBucket): FocusBucket {
  const i = BUCKET_CYCLE.indexOf(b);
  return BUCKET_CYCLE[(i + 1) % BUCKET_CYCLE.length];
}

// ~15 / ~30 / 45+ นาที
export const BUCKET_LABEL: Record<'q' | 'm' | 'l', string> = {
  q: '~15',
  m: '~30',
  l: '45+',
};
