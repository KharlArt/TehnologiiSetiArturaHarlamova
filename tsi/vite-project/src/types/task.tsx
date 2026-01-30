export type TaskSize = 'large' | 'medium' | 'small';
export type TaskStatus = 'todo' | 'inProgress' | 'done';

export interface Task {
  id: string;
  text: string;
  size: TaskSize;
  status: TaskStatus;
  createdAt: Date;
}

export interface TaskStats {
  total: number;
  completed: number;
  inProgress: number;
  todo: number;
  largeTasks: Task[];
  mediumTasks: Task[];
  smallTasks: Task[];
}