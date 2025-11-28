export * from '../types';
export { TodosList } from '../components/TodosList';
export { default as TodosRoutes } from '../routes/TodosRoutes';

export interface Todo {
  id: string;
  title: string;
  dueDate: string;
  isDone: boolean;
}
