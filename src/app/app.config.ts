import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {TodoServiceService} from "./services/todo-service.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), TodoServiceService]
};
