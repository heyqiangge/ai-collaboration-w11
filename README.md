# AI 协作日志 W11 · Todo V4.0（React 重构）

把原生 DOM 版 Todo 重构为 React + TypeScript，并用双轨证据验证迁移。

## 运行

```bash
npm install
npm run dev     # 本地开发
npm run build   # tsc 类型检查 + 生产构建
npm run test    # Vitest 单元测试（8 个用例）
```

## 结构

```
src/
├── components/
│   ├── TodoApp.tsx    # 唯一数据源：useState<Todo[]>，增删改用不可变更新
│   ├── TodoForm.tsx   # 受控输入框，onAdd 向上传
│   ├── TodoList.tsx   # 接收 todos，渲染 TodoItem
│   └── TodoItem.tsx   # 单项，onToggle / onDelete 向上传
├── utils/todo.ts      # 纯函数 addTodo / toggleTodo / deleteTodo（单测直接调用）
├── task3/FixedTodoApp.tsx  # 任务 3：AI 修复后的“假 React”代码（访问 /?task3）
├── types.ts
└── main.tsx
tests/todo.test.ts     # 单元测试
```

## 验证要点

- 组件内没有 `document.querySelector`、`getElementById`、`innerHTML`。唯一命中是 `main.tsx` 里挂载 React 的 `createRoot(document.getElementById('root'))`。
- 数据向下传（props），事件向上传（回调）；State 更新统一用 `setTodos(prev => pureFn(prev, ...))`。
- 调试时 `window.todos` 会同步当前 State，方便和页面对比。
