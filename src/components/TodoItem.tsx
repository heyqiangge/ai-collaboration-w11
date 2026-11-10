import type { Todo } from '../types';

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={todo.completed ? 'todo-item done' : 'todo-item'}>
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => onToggle(todo.id)}>{todo.completed ? '撤销' : '完成'}</button>
      <button className="danger" onClick={() => onDelete(todo.id)}>删除</button>
    </li>
  );
}
