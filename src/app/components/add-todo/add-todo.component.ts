import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {
    this.todoForm = this.fb.group({
      cim: ['', Validators.required],
      leiras: [''],
      datum: ['', Validators.required],
      completed: [false]
    });
    
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value).subscribe(() => {
        this.router.navigate(['/todo-list']);
      });
    }
  }
  
}
