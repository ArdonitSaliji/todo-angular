export interface Todo {
  todoId?: number;
  userId?: number;
  text: string;
  isDone: boolean;
  isEdit: boolean;
  created_at?: string;
  updated_at?: string;
}
