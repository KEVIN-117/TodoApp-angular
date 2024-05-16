import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router"
import {TodoServiceService} from "../../../services/todo-service.service";
import {TodoDTO} from "../../../../types";
import {NgClass} from "@angular/common";
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private id: string = ''
  protected todo: TodoDTO
  constructor(private route: ActivatedRoute, private todoService: TodoServiceService) {
    this.todo = {
      id: '',
      key: '',
      title: '',
      description: '',
      completed: false
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.getTodo()
  }

  getTodo(){
    this.todoService.getTodoById(this.id).pipe(
      tap((todo: TodoDTO)=>{
        this.todo = todo
      }),
      catchError((error)=>{
        console.log(error)
        return []
      })
    ).subscribe()
  }
  getClass() {

    return {
      'border-2': true,
      'rounded-xl': true,
      'p-3': true,
      'grid': true,
      'grid-cols-1': true,
      'gap-10': true,
      'shadow-xl': true,
      'shadow-blue-700': this.todo.completed,
      'shadow-red-700': !this.todo.completed,
      'border-blue-600': this.todo.completed,
      'border-red-600': !this.todo.completed,
    };
  }
}
