import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, // ✅ EZ HIÁNYZOTT
    private fb: FormBuilder,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      cim: [''],
      leiras: [''],
      completed: [false]
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.todoService.getTodoById(id).subscribe(todo => {
        this.todoForm.patchValue(todo);
      });
    }
  }

  saveTodo(): void {
    const updated = this.todoForm.value;
    this.todoService.updateTodo(updated).subscribe(() => {
      console.log('Sikeres mentés');
    });
  }
}
