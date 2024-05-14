import {Injectable, signal} from '@angular/core';
import {describe} from "node:test";
import {TodoDTO} from "../../types";

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private todos = signal<TodoDTO[]>( [
    {
      id: '1',
      title: 'Learn Node.js con Express y MongoDB implementando un CRUD, con autenticación y autorización de usuarios.',
      completed: true,
      description: 'Aprender a crear una API RESTful con Node.js, Express y MongoDB, implementando un CRUD, con autenticación y autorización de usuarios.'
    },
    {
      id: '2',
      title: 'Learn React',
      completed: true,
      description: 'Aprender React desde cero, desde los fundamentos básicos hasta los conceptos más avanzados.'
    },
    {
      id: '3',
      title: 'Learn Vue',
      completed: false,
      description: 'Aprender Vue desde cero, desde los fundamentos básicos hasta los conceptos más avanzados.'
    },
    {
      id: '4',
      title: 'Learn Svelte',
      completed: false,
      description: 'Aprender Svelte desde cero, desde los fundamentos básicos hasta los conceptos más avanzados.'
    },
    {
      id: '5',
      title: 'Learn Web Components',
      completed: false,
      description: 'Aprender Web Components desde cero, desde los fundamentos básicos hasta los conceptos más avanzados.'
    },
    {
      id: '6',
      title: 'Learn TypeScript',
      completed: true,
      description: 'Aprender TypeScript desde cero, desde los fundamentos básicos hasta los conceptos más avanzados.'
    },
    {
      id: '7',
      title: 'Learn JavaScript',
      completed: false,
      description: 'Aprender JavaScript desde cero, desde los fundamentos básicos hasta los conceptos más avanzados.'
    },
    {
      id: '8',
      title: 'Learn CSS',
      completed: true,
      description: 'Aprender CSS desde cero, desde los fundamentos básicos hasta los conceptos más avanzados.'
    },
    {
      id: '9',
      title: 'Learn HTML',
      completed: false,
      description: 'Aprender HTML desde cero, desde los fundamentos básicos hasta los conceptos más avanzados.'
    },
    {
      id: '10',
      title: 'Learn Angular',
      completed: false,
      description: 'Aprender Angular desde cero, desde los fundamentos básicos hasta los conceptos más avanzados.'
    }
  ])
  constructor() { }

  getTodos(){
    return this.todos()
  }

  getTodoById(id: string) {
    return this.todos().find(todo => todo.id === id)
  }

  createTodo(todo: TodoDTO){
    this.todos.set([...this.todos(), todo])
  }

  updateTodo(todo: TodoDTO){

  }

  onCompleted(id: string){
    this.todos.set(this.todos().map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  deleteTodoById(id: string){
    this.todos.set(this.todos().filter(todo => todo.id !== id))
  }

  getTotal(){
    return this.todos().length
  }

  getTotalOnCompleted(){
    return this.todos().filter(todo => todo.completed).length
  }

  getTotalOnPending(){
    return this.todos().filter(todo => !todo.completed).length
  }

  handleSearch(search: string){
    return this.todos().filter(todo => todo.title.toLowerCase().includes(search))
  }
}
