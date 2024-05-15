import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TodoServiceService} from "../../../services/todo-service.service";
import { v4 as uuid } from 'uuid'
import {TodoDTO, TodoFormDTO} from "../../../../types";
import { Router } from '@angular/router'
import {NgForOf, NgIf} from "@angular/common";
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  title: FormControl = new FormControl('', {
    nonNullable: true,
    validators:[
      Validators.required,
      Validators.minLength(4),
    ]
  })

  description: FormControl = new FormControl('', {
    nonNullable: true,
    validators:[
      Validators.required,
      Validators.minLength(10),
    ]
  })

  todoForm: FormGroup = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators:[
        Validators.required,
        Validators.minLength(4),
      ]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators:[
        Validators.required,
        Validators.minLength(10),
      ]
    }),
  })


  constructor(private todoService: TodoServiceService, private router: Router) {

  }

  onSubmit(){
    const data: TodoFormDTO = this.todoForm.value
    const todo: TodoDTO = {
      id: uuid(),
      title: data.title,
      completed: false,
      description: data.description
    }
    this.todoService.createTodo(todo).pipe(
      tap((data)=>{
        if (data){
          alert('Todo created successfully!')
          this.todoForm.reset()
          this.router.navigate(['/todo'])
        }
      }),
      catchError((error)=>{
        alert('An error occurred while creating the todo!')
        return error
      })
    ).subscribe()

  }

  onCancel(){
    this.router.navigate(['/todo'])
  }

  onClear(){
    this.todoForm.reset()
  }

  getError(){
    this.todoForm.get('description')?.hasError('required')

  }
}
