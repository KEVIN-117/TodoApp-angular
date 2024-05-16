import {Injectable, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {TodoDTO} from "../../types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {

  private URL = `https://todo-web-app-79f03-default-rtdb.firebaseio.com`

  private todos = signal<TodoDTO[]>( [])
  constructor(private fetch: HttpClient) { }

  getTodos(): Observable<any>{
    return this.fetch.get(`${this.URL}/todos.json`, {
      headers: {
        accept: 'application/json'
      }
    })
  }

  getTodoById(id: string):Observable<any>{
    console.log(id)
    return this.fetch.get(`${this.URL}/todos/${id}.json`)
  }

  createTodo(todo: TodoDTO): Observable<any>{
    return this.fetch.post(`${this.URL}/todos.json`, todo)
  }

  updateTodo(todo: TodoDTO){

  }

  onCompleted(todo: TodoDTO){
    console.log(todo.key, !todo.completed)
    return this.fetch.patch(`${this.URL}/todos/${todo.key}.json`, {completed: !todo.completed})
  }

  deleteTodoById(id: string): Observable<any>{
    return this.fetch.delete(`${this.URL}/todos/${id}.json`)
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

  setTodo(todos: TodoDTO[]){
    this.todos.set(todos)
  }
}
