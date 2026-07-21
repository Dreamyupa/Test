import type { Task } from '../types';
import { BUCKET_LABEL } from '../lib/task';

interface Props {
  task: Task;
  onToggleDone: (id: string) => void;
  onCycleBucket: (id: string) => void;
  onRemove: (id: string) => void;
}

export function TaskRow({ task, onToggleDone, onCycleBucket, onRemove }: Props) {
  return (
    <li className="group flex items-center gap-3 rounded-xl px-2 py-2">
      {/* done toggle */}
      <button
        type="button"
        onClick={() => onToggleDone(task.id)}
        aria-label={task.done ? 'ทำเครื่องหมายว่ายังไม่เสร็จ' : 'ทำเสร็จ'}
        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition-colors ${
          task.done
            ? 'border-marigold bg-marigold text-surface'
            : 'border-hairline text-transparent'
        }`}
      >
        <span className="text-xs leading-none">✓</span>
      </button>

      <span
        className={`min-w-0 flex-1 truncate text-[15px] ${
          task.done ? 'text-sage line-through' : 'text-ink'
        }`}
      >
        {task.text}
      </span>

      {/* time chip (tap to cycle) */}
      <button
        type="button"
        onClick={() => onCycleBucket(task.id)}
        aria-label="เลือกช่วงเวลา"
        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${
          task.focusBucket
            ? 'bg-pine/10 text-pine'
            : 'text-sage opacity-0 group-hover:opacity-100'
        }`}
      >
        {task.focusBucket ? BUCKET_LABEL[task.focusBucket] : '⏱'}
      </button>

      {/* remove */}
      <button
        type="button"
        onClick={() => onRemove(task.id)}
        aria-label="ลบงาน"
        className="shrink-0 px-1 text-sage opacity-0 transition-opacity group-hover:opacity-100"
      >
        ✕
      </button>
    </li>
  );
}
