import React from 'react';
import { useQuery } from 'react-query';

type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export const TodoApp: React.FC = () => {
  const {
    isLoading,
    data,
    error,
    refetch: refetchTodo,
  } = useQuery<Todo>(
    'todos',
    async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );

      if (!response.ok) throw new Error('Can not fetch todos');

      return response.json();
    },
    { refetchOnWindowFocus: false },
  );

  const handleRefetchTodo = () => {
    refetchTodo();
  };

  return (
    <div>
      <p>isLoading: {JSON.stringify(isLoading)}</p>
      <p>error: {JSON.stringify(error)}</p>
      <code>data: {JSON.stringify(data, null, 2)}</code>
      <br />
      <button onClick={handleRefetchTodo}>Re-fetch</button>
    </div>
  );
};

export default TodoApp;
