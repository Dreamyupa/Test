import { useState } from 'react';
import type { Task, FocusBucket } from '../types';

interface Props {
  wishlist: Task[];
  onStartFocus: (task: Task) => void;
}

type Filter = 'all' | FocusBucket;

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'ทั้งหมด' },
  { key: 'q', label: '~15' },
  { key: 'm', label: '~30' },
  { key: 'l', label: '45+' },
];

export function PickForMe({ wishlist, onStartFocus }: Props) {
  const [filter, setFilter] = useState<Filter>('all');
  const [pickedId, setPickedId] = useState<string | null>(null);

  const pool = wishlist.filter(
    (t) => !t.done && (filter === 'all' || t.focusBucket === filter),
  );
  const picked = pool.find((t) => t.id === pickedId) ?? null;

  const roll = () => {
    if (pool.length === 0) {
      setPickedId(null);
      return;
    }
    // avoid repeating the current pick when there's more than one option
    const candidates =
      pool.length > 1 && pickedId
        ? pool.filter((t) => t.id !== pickedId)
        : pool;
    const next = candidates[Math.floor(Math.random() * candidates.length)];
    setPickedId(next.id);
  };

  return (
    <div className="rounded-2xl bg-pine p-4 text-surface shadow-sm">
      {/* time filter */}
      <div className="mb-3 flex gap-1.5">
        {FILTERS.map(({ key, label }) => (
          <button
            key={String(key)}
            type="button"
            onClick={() => setFilter(key)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              filter === key
                ? 'bg-surface text-pine'
                : 'bg-surface/15 text-surface/80'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {picked ? (
        <div>
          <p className="mb-3 text-center text-lg font-semibold leading-snug">
            {picked.text}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onStartFocus(picked)}
              className="flex-1 rounded-full bg-marigold py-2.5 font-semibold text-ink"
            >
              เริ่มเลย →
            </button>
            <button
              type="button"
              onClick={roll}
              className="rounded-full bg-surface/15 px-4 py-2.5 font-medium text-surface"
            >
              สุ่มใหม่ 🎲
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={roll}
          disabled={pool.length === 0}
          className="w-full rounded-full bg-marigold py-3 text-lg font-semibold text-ink transition-opacity disabled:opacity-50"
        >
          {pool.length === 0 ? 'ยังไม่มีงานให้เลือก' : 'เลือกให้เลย 🎲'}
        </button>
      )}
    </div>
  );
}
