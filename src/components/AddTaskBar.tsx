import { useState } from 'react';
import type { Lane, FocusBucket } from '../types';
import { BUCKET_LABEL, nextBucket } from '../lib/task';

interface Props {
  onAdd: (text: string, lane: Lane, focusBucket: FocusBucket) => void;
}

const LANES: { key: Lane; label: string }[] = [
  { key: 'commit', label: 'จำเป็น' },
  { key: 'wish', label: 'อยากทำ' },
];

export function AddTaskBar({ onAdd }: Props) {
  const [text, setText] = useState('');
  const [lane, setLane] = useState<Lane>('wish');
  const [bucket, setBucket] = useState<FocusBucket>(null);

  const submit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed, lane, bucket);
    setText('');
    setBucket(null);
    // keep `lane` so adding several to the same list stays fast
  };

  return (
    <div className="rounded-2xl bg-surface p-3 shadow-sm ring-1 ring-hairline">
      {/* lane toggle */}
      <div className="mb-2 flex gap-1 rounded-full bg-bg p-1">
        {LANES.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setLane(key)}
            className={`flex-1 rounded-full py-1.5 text-sm font-medium transition-colors ${
              lane === key ? 'bg-pine text-surface' : 'text-sage'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* input row */}
      <div className="flex items-center gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submit();
          }}
          placeholder="อยากทำอะไร…"
          className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-ink outline-none placeholder:text-sage"
        />
        <button
          type="button"
          onClick={() => setBucket(nextBucket(bucket))}
          aria-label="เลือกช่วงเวลา"
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
            bucket
              ? 'bg-pine/10 text-pine'
              : 'text-sage ring-1 ring-hairline'
          }`}
        >
          {bucket ? BUCKET_LABEL[bucket] : '⏱'}
        </button>
        <button
          type="button"
          onClick={submit}
          disabled={!text.trim()}
          aria-label="เพิ่มงาน"
          className="shrink-0 rounded-full bg-pine px-4 py-1.5 text-lg font-semibold text-surface transition-opacity disabled:opacity-40"
        >
          +
        </button>
      </div>
    </div>
  );
}
