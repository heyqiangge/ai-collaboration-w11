import { useState } from 'react';
import type { FormEvent } from 'react';

export interface TodoFormProps {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text.trim() === '') return;
    onAdd(text);
    setText(''); // 受控组件：清空输入框靠改 State，而不是改 input.value
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        aria-label="新任务"
        placeholder="输入任务，回车或点击添加"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">添加</button>
    </form>
  );
}
