import { Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './services/auth.guard';
import { EditTodoComponent } from './components/edit-todo.component';


export const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'add-todo', component: AddTodoComponent, canActivate: [authGuard] },
  { path: 'todo-list', component: TodoListComponent, canActivate: [authGuard] },
  { path: 'todo-detail', component: TodoDetailComponent, canActivate: [authGuard] },
  { path: 'calendar', component: CalendarViewComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit-todo/:id', component: EditTodoComponent }

  
];
