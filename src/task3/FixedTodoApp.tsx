import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function FixedTodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  function handleAdd() {
    if (text.trim() === '') return; // 业务规则：空内容不添加（保留）
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]); // 不可变：展开生成新数组，不再 push
    setText(''); // 列表完全由 State 渲染，删除手动拼接 DOM 的代码
  }

  function handleToggle(id: number) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)), // 返回新数组 + 新对象
    );
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>添加</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)}>
            {todo.text} {todo.completed ? '✔' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}
