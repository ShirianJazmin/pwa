import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todolist';

  private dbService = inject(NgxIndexedDBService);

  ngOnInit(): void {
    console.log('AppComponent init');
    this.dbService.add('todos', {
      cim: 'kormos',
      leiras: '13:00kor kormoshoz van idopontom',
      completed: false
    }).subscribe({
      next: (key) => console.log('Sikeresen mentve IndexedDB-be', key),
      error: (err) => console.error('HIBA:', err)
    });
  }
}
