import { useEffect, useState } from 'react';
import type { Todo } from '../types';
import { addTodo, deleteTodo, toggleTodo } from '../utils/todo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

declare global {
  interface Window {
    todos?: Todo[];
  }
}

export default function TodoApp() {
  // 唯一数据源：todos 只存在于 State 中
  const [todos, setTodos] = useState<Todo[]>([]);

  // 添加：复用纯函数，不可变更新
  function handleAdd(text: string) {
    setTodos((prev) => addTodo(prev, text));
  }

  // 切换：map 返回新数组 + 新对象
  function handleToggle(id: number) {
    setTodos((prev) => toggleTodo(prev, id));
  }

  // 删除：filter 返回新数组
  function handleDelete(id: number) {
    setTodos((prev) => deleteTodo(prev, id));
  }

  // 调试用：把当前 State 暴露到控制台，便于与页面对比
  useEffect(() => {
    window.todos = todos;
    console.log('todos', JSON.stringify(todos));
  }, [todos]);

  const left = todos.filter((t) => !t.completed).length;

  return (
    <div className="todo-app">
      <h1>Todo V4.0 · React</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      <p className="footer">共 {todos.length} 项，未完成 {left} 项</p>
    </div>
  );
}
