import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']

})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.loadTodos();
    this.todoService.todoChanged$.subscribe(() => {
      this.loadTodos();
    });
  }

  loadTodos(): void {
    this.todos$ = this.todoService.getTodos();
  }

  deleteTodo(id: number | undefined) {
    if (id === undefined) return;
    this.todoService.deleteTodo(id).subscribe();
  }

  confirmDelete(id?: number): void {
    if (!id) return;
    const confirmed = confirm('Biztos törölni szeretnéd ezt a teendőt?');
    if (confirmed) {
      this.todoService.deleteTodo(id).subscribe();
    }
  }

  editTodo(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/edit-todo', id]);
    }
  }

  goToAdd(): void {
    this.router.navigate(['/add-todo']);
  }

  toggleComplete(todo: Todo): void {
    const updated = { ...todo, completed: !todo.completed };
    this.todoService.updateTodo(updated).subscribe();
  }
}
