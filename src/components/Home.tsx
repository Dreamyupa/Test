import type { Task, Lane, FocusBucket } from '../types';
import { AddTaskBar } from './AddTaskBar';
import { TaskRow } from './TaskRow';
import { PickForMe } from './PickForMe';

interface Props {
  tasks: Task[];
  onAdd: (text: string, lane: Lane, focusBucket: FocusBucket) => void;
  onToggleDone: (id: string) => void;
  onCycleBucket: (id: string) => void;
  onRemove: (id: string) => void;
  onStartFocus: (task: Task) => void;
}

export function Home({
  tasks,
  onAdd,
  onToggleDone,
  onCycleBucket,
  onRemove,
  onStartFocus,
}: Props) {
  const commit = tasks.filter((t) => t.lane === 'commit');
  const wish = tasks.filter((t) => t.lane === 'wish');

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-4 px-4 pb-16 pt-6">
      <header className="px-1">
        <h1 className="text-xl font-semibold text-pine">OneThing</h1>
        <p className="text-sm text-sage">ว่างเมื่อไหร่ ให้แอปเลือกให้</p>
      </header>

      <AddTaskBar onAdd={onAdd} />

      <PickForMe wishlist={wish} onStartFocus={onStartFocus} />

      <LaneSection
        title="จำเป็น"
        hint="มีกำหนด ต้องทำ"
        tasks={commit}
        onToggleDone={onToggleDone}
        onCycleBucket={onCycleBucket}
        onRemove={onRemove}
      />
      <LaneSection
        title="อยากทำ"
        hint="ว่างค่อยทำ"
        tasks={wish}
        onToggleDone={onToggleDone}
        onCycleBucket={onCycleBucket}
        onRemove={onRemove}
      />
    </div>
  );
}

interface LaneProps {
  title: string;
  hint: string;
  tasks: Task[];
  onToggleDone: (id: string) => void;
  onCycleBucket: (id: string) => void;
  onRemove: (id: string) => void;
}

function LaneSection({
  title,
  hint,
  tasks,
  onToggleDone,
  onCycleBucket,
  onRemove,
}: LaneProps) {
  return (
    <section>
      <div className="mb-1 flex items-baseline gap-2 px-1">
        <h2 className="text-sm font-semibold text-ink">{title}</h2>
        <span className="text-xs text-sage">{hint}</span>
      </div>
      {tasks.length === 0 ? (
        <p className="px-2 py-3 text-sm text-sage/70">ยังไม่มีงาน</p>
      ) : (
        <ul className="rounded-2xl bg-surface p-1 shadow-sm ring-1 ring-hairline">
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onToggleDone={onToggleDone}
              onCycleBucket={onCycleBucket}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
