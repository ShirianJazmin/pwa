import { Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { CalendarWievComponent } from './components/calendar-wiev/calendar-wiev.component';

export const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'todo-detail', component: TodoDetailComponent },
  { path: 'calendar-view', component: CalendarWievComponent }
];
