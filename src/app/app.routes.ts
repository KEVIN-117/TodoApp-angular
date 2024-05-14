import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { LabsComponent } from './pages/labs/labs.component'
import {NotFoundComponent} from "./controls/not-found/not-found.component";
import {TodoAppComponent} from "./pages/todo-app/todo-app.component";
import {CreateComponent} from "./pages/todo-app/create/create.component";
import {TodoListComponent} from "./pages/todo-app/todo-list/todo-list.component";
import {UpdateComponent} from "./pages/todo-app/update/update.component";
import {DetailsComponent} from "./pages/todo-app/details/details.component";
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'labs',
    component: LabsComponent
  },
  {
    path: 'todo',
    component: TodoAppComponent,
    children: [
      {
        path: '',
        component: TodoListComponent,
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'update/:id',
        component: UpdateComponent
      },
      {
        path: 'detail/:id',
        component: DetailsComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404'
  }
];
