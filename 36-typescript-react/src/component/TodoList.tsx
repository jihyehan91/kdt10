import { useState } from 'react';
import { TodoItemProp } from '../types/types';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState<TodoItemProp[]>([
    { id: 1, content: '첫 번째 메모', completed: false },
    { id: 2, content: '두 번째 메모', completed: true },
  ]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    const updateTodo = [
      ...todos,
      { id: Date.now(), content: newTodo, completed: false },
    ];
    setTodos(updateTodo); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
  };

  const toggleTodo = (targetId: number) => {
    const updateTodo = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updateTodo);
    console.log(updateTodo);
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type='text'
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button onClick={addTodo}>add</button>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </>
  );
}

export default TodoList;
