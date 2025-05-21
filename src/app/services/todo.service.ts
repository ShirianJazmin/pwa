import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, Subject } from 'rxjs';

export interface Todo {
  id?: number;
  cim: string;
  leiras: string;
  completed: boolean;
  datum?: string;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todoChanged = new Subject<void>();
  todoChanged$ = this.todoChanged.asObservable();

  constructor(private dbService: NgxIndexedDBService) {}

  getTodos(): Observable<Todo[]> {
    return this.dbService.getAll<Todo>('todos');
  }

  getTodoById(id: number): Observable<Todo> {
    return this.dbService.getByKey<Todo>('todos', id);
  }
  addTodo(todo: Todo): Observable<any> {
    const result$ = this.dbService.add('todos', todo);
    result$.subscribe(() => this.todoChanged.next());
    return result$;
  }

  deleteTodo(id: number): Observable<any> {
    const result$ = this.dbService.delete('todos', id);
    result$.subscribe(() => this.todoChanged.next());
    return result$;
  }

  updateTodo(todo: Todo): Observable<any> {
    const result$ = this.dbService.update('todos', todo);
    result$.subscribe(() => this.todoChanged.next()); // 🔔
    return result$;
  }
}
