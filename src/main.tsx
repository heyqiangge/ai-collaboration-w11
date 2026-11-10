import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TodoApp from './components/TodoApp';
import FixedTodoApp from './task3/FixedTodoApp';

// ?task3 用于验证任务 3 中 AI 修复后的组件
const isTask3 = new URLSearchParams(location.search).has('task3');

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isTask3 ? <FixedTodoApp /> : <TodoApp />}</StrictMode>,
);
