import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router"
import {TodoServiceService} from "../../../services/todo-service.service";
import {TodoDTO} from "../../../../types";
import {routes} from "../../../app.routes";
import {NgClass} from "@angular/common";

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
  constructor(private route: ActivatedRoute, private todoService: TodoServiceService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  getTodo(): TodoDTO{
    return this.todoService.getTodoById(this.id) || {id: '', title: '', completed: false}
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
      'shadow-blue-700': this.getTodo().completed,
      'shadow-red-700': !this.getTodo().completed,
      'border-blue-600': this.getTodo().completed,
      'bg-blue-600/20': this.getTodo().completed,
      'border-red-600': !this.getTodo().completed,
      'bg-red-600/20': !this.getTodo().completed
    };
  }
}
