import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'TodoApp';
  name = 'Angular';

  tasks = [
    {
      title: 'Task 1',
      completed: false
    },
    {
      title: 'Task 2',
      completed: false
    },
    {
      title: 'Task 3',
      completed: false
    },
    {
      title: 'Task 4',
      completed: false
    },
    {
      title: 'Task 5',
      completed: false
    },
    {
      title: 'Task 6',
      completed: false
    },
    {
      title: 'Task 7',
      completed: false
    },
    {
      title: 'Task 8',
      completed: false
    },
    {
      title: 'Task 9',
      completed: false
    },
    {
      title: 'Task 10',
      completed: false
    },
    {
      title: 'Task 11',
      completed: false
    },
    {
      title: 'Task 12',
      completed: false
    },
    {
      title: 'Task 13',
      completed: false
    },
    {
      title: 'Task 14',
      completed: false
    }
  ]
}
