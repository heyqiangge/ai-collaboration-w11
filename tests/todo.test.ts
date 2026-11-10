import { describe, it, expect } from 'vitest';
import { addTodo, toggleTodo, deleteTodo } from '../src/utils/todo';
import type { Todo } from '../src/types';

const base: Todo[] = [
  { id: 1, text: '任务A', completed: false },
  { id: 2, text: '任务B', completed: true },
];

describe('addTodo', () => {
  it('添加一项，completed 默认为 false', () => {
    const r = addTodo([], '学习 React', 100);
    expect(r).toEqual([{ id: 100, text: '学习 React', completed: false }]);
  });
  it('空字符串/纯空格不添加', () => {
    expect(addTodo(base, '   ')).toBe(base);
    expect(addTodo(base, '')).toHaveLength(2);
  });
  it('会去掉首尾空格', () => {
    expect(addTodo([], '  任务C  ', 3)[0].text).toBe('任务C');
  });
  it('不修改原数组（不可变）', () => {
    const r = addTodo(base, '任务C', 3);
    expect(base).toHaveLength(2);
    expect(r).not.toBe(base);
  });
});

describe('toggleTodo', () => {
  it('切换指定项的完成状态', () => {
    const r = toggleTodo(base, 1);
    expect(r[0].completed).toBe(true);
    expect(r[1].completed).toBe(true);
  });
  it('返回新数组、被改项是新对象，原数据不变', () => {
    const r = toggleTodo(base, 1);
    expect(r).not.toBe(base);
    expect(r[0]).not.toBe(base[0]);
    expect(r[1]).toBe(base[1]);
    expect(base[0].completed).toBe(false);
  });
});

describe('deleteTodo', () => {
  it('删除指定 id', () => {
    expect(deleteTodo(base, 1)).toEqual([base[1]]);
  });
  it('id 不存在时内容不变且不修改原数组', () => {
    const r = deleteTodo(base, 999);
    expect(r).toEqual(base);
    expect(base).toHaveLength(2);
  });
});
