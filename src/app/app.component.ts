import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { AuthService } from './services/auth.service';
import { AsyncPipe, NgIf } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todolist';
  authService = inject(AuthService);
  dbService = inject(NgxIndexedDBService);

  ngOnInit(): void {
    this.dbService.add('todos', {
      cim: 'kormos',
      leiras: '13:00kor kormoshoz van idopontom',
      completed: false
    }).subscribe();
  }

  logout() {
    this.authService.logout();
  }
}
