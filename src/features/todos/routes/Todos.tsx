import { getTodos } from '../api/getTodos';

export function TodosList() {
  const data = getTodos();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>📋 Task List (from Mock API)</h2>

      {data.map((item) => (
        <div
          key={item.id}
          style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}
        >
          • {item.title} (Due: {item.dueDate})
        </div>
      ))}
    </div>
  );
}
