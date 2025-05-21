import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService, Todo } from '../services/todo.service';

@Component({
  selector: 'app-edit-todo',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  todoForm!: FormGroup;
  todoId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      cim: ['', Validators.required],
      leiras: [''],
      datum: ['', Validators.required], 
      completed: [false],
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.todoId = id;
      this.todoService.getTodoById(id).subscribe((todo) => {
        this.todoForm.patchValue(todo);
      });
    }
  }

  saveTodo(): void {
    if (this.todoForm.valid) {
      const updatedTodo: Todo = {
        id: this.todoId,
        ...this.todoForm.value,
      };

      this.todoService.updateTodo(updatedTodo).subscribe(() => {
        this.router.navigate(['/todo-list']);
      });
    }
  }
}
