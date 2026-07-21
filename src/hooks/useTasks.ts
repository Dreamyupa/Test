import { useEffect, useState } from 'react';
import type { Task } from '../types';
import { loadTasks, saveTasks } from '../lib/storage';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return [tasks, setTasks] as const;
}
