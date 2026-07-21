import type { Task, Lane, FocusBucket } from './types';
import { useTasks } from './hooks/useTasks';
import { createTask, nextBucket } from './lib/task';
import { Home } from './components/Home';

function App() {
  const [tasks, setTasks] = useTasks();

  const addTask = (text: string, lane: Lane, focusBucket: FocusBucket) => {
    setTasks((prev) => [createTask(text, lane, focusBucket), ...prev]);
  };

  const toggleDone = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const done = !t.done;
        return { ...t, done, doneAt: done ? Date.now() : null };
      }),
    );
  };

  const cycleBucket = (id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, focusBucket: nextBucket(t.focusBucket) } : t,
      ),
    );
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const startFocus = (task: Task) => {
    // Focus mode arrives in step 4; for now this is a no-op entry point.
    void task;
  };

  return (
    <Home
      tasks={tasks}
      onAdd={addTask}
      onToggleDone={toggleDone}
      onCycleBucket={cycleBucket}
      onRemove={removeTask}
      onStartFocus={startFocus}
    />
  );
}

export default App;
