import { QueryClient, QueryClientProvider } from 'react-query';
import TodoApp from './TodoApp';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoApp />
    </QueryClientProvider>
  );
}

export default App;
