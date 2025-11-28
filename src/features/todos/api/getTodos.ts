import { Todo } from '../types';

export const getTodos = (): Todo[] => {
  return [
    {
      id: '2002',
      title: 'alarm',
      dueDate: 'may,2008',
      isDone: true,
    },
    {
      id: '2005',
      title: 'alarm',
      dueDate: 'may,2008',
      isDone: true,
    },
  ];
};
