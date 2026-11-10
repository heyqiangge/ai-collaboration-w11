import type { Todo } from '../types';

/** 纯函数：添加任务（空白文本不添加，返回新数组） */
export function addTodo(todos: Todo[], text: string, id: number = Date.now()): Todo[] {
  const trimmed = text.trim();
  if (trimmed === '') return todos;
  return [...todos, { id, text: trimmed, completed: false }];
}

/** 纯函数：切换完成状态（返回新数组，被修改的项也是新对象） */
export function toggleTodo(todos: Todo[], id: number): Todo[] {
  return todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
}

/** 纯函数：删除任务 */
export function deleteTodo(todos: Todo[], id: number): Todo[] {
  return todos.filter((t) => t.id !== id);
}
