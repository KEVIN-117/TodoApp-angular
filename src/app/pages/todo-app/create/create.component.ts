import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TodoServiceService} from "../../../services/todo-service.service";
import { v4 as uuid } from 'uuid'
import {TodoDTO, TodoFormDTO} from "../../../../types";
import { Router } from '@angular/router'
import {NgForOf, NgIf} from "@angular/common";
import {error} from "@angular/compiler-cli/src/transformers/util";

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
    /*this.todoService.createTodo(todo)
    if (this.todoForm.valid){
      alert('Todo created successfully!')
      this.router.navigate(['/todo'])
    }else {

    }
    this.todoForm.reset()*/
    console.log()
  }
}
