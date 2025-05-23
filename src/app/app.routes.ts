import { Routes } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { TaskComponent } from './task-comp/task-comp.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: NewComponentComponent },
  { path: 'about', component: NewComponentComponent },
  { path: 'task', component: TaskComponent }
];
