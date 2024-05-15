import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TodoServiceService} from "../../../services/todo-service.service";
import {EventDTO, TodoDTO} from "../../../../types";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";

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
    /*this.total = this.todoService.getTotal()
    this.completed = this.todoService.getTotalOnCompleted()
    this.pending = this.todoService.getTotalOnPending()*/
    this.todoService.getTodos().subscribe((todos)=>{
      this.todos = todos
    })
    this.handleValue.valueChanges.subscribe((value)=>{
      this.todos = this.todoService.handleSearch(value)
    })
    this.handleValueUpdate.valueChanges.subscribe((value)=>{
      this.todoService.onCompleted(value)
    })
  }

  setCompleted(id: string){
    this.handleValueUpdate.setValue(id)
    this.updateAttributes()
  }

  updateAttributes(){
    this.total = this.todoService.getTotal()
    this.completed = this.todoService.getTotalOnCompleted()
    this.pending = this.todoService.getTotalOnPending()
    this.handleValue.setValue('')
  }
}
