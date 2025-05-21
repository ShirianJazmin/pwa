import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../../services/todo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MagyarDatumPipe } from '../../pipes/magyar-datum.pipe';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css'],
  standalone: true,
  imports: [CommonModule, MagyarDatumPipe]
})
export class CalendarViewComponent implements OnInit {
  objectKeys = Object.keys; 
  todosByDate: { [key: string]: Todo[] } = {};

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();

    this.todoService.todoChanged$.subscribe(() => {
      this.loadTodos();
    });
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todosByDate = this.groupByDate(todos);
    });
  }

  groupByDate(todos: Todo[]): { [key: string]: Todo[] } {
    return todos.reduce((acc, todo) => {
      const dateKey = todo.datum || 'Nincs dátum';
      acc[dateKey] = acc[dateKey] || [];
      acc[dateKey].push(todo);
      return acc;
    }, {} as { [key: string]: Todo[] });
  }
}
