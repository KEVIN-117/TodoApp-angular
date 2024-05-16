import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TodoServiceService} from "../../../services/todo-service.service";
import {TodoDTO} from "../../../../types";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  total: number= 0
  completed: number = 0
  pending: number= 0
  todos : TodoDTO[] = []

  handleValue: FormControl = new FormControl('', {
    nonNullable: true,
    validators:[
      Validators.required,
      Validators.minLength(3),
    ]
  })

  handleValueUpdate : FormControl = new FormControl('', )
  constructor(private todoService: TodoServiceService) {
  }

  ngOnInit(){

    this.handleValue.valueChanges.subscribe((value)=>{
      this.todos = this.todoService.handleSearch(value)
    })
    this.getTodos()
    this.total = this.todoService.getTotal()
    this.completed = this.todoService.getTotalOnCompleted()
    this.pending = this.todoService.getTotalOnPending()
  }

  setCompleted(todo: TodoDTO){
    this.todoService.onCompleted(todo).pipe(
      tap(()=>{
        alert('Todo updated')
        this.updateAttributes()
      }),
      catchError((error)=>{
        alert('An error occurred')
        return error
      })
    ).subscribe()
  }

  updateAttributes(){
    this.total = this.todoService.getTotal()
    this.completed = this.todoService.getTotalOnCompleted()
    this.pending = this.todoService.getTotalOnPending()
    this.handleValue.setValue('')
    this.getTodos()
  }

  getTodos(){
    this.todos = []
    this.todoService.getTodos().subscribe((todos)=>{
      for (let key in todos){
        this.todos.push({
          key: key,
          ...todos[key]
        })
      }
      this.todoService.setTodo(this.todos)
    })
  }

  handleDelete(todo: TodoDTO){
    if (todo.key){
      this.todoService.deleteTodoById(todo.key).pipe(
        tap(()=>{
          alert('Todo deleted')
          this.updateAttributes()
        }),
        catchError((error)=>{
          alert('An error occurred')
          return error
        })
      ).subscribe()
    }
  }
}
