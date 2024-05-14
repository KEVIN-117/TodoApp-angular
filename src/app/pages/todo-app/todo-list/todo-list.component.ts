import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TodoServiceService} from "../../../services/todo-service.service";
import {TodoDTO} from "../../../../types";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  total: number= 0
  completed: number = 0
  pending: number= 0
  todos : TodoDTO[] = []
  constructor(private todoService: TodoServiceService) {
  }

  ngOnInit(){
    this.total = this.todoService.getTotal()
    this.completed = this.todoService.getTotalOnCompleted()
    this.pending = this.todoService.getTotalOnPending()
    this.todos = this.todoService.getTodos()
  }
}
