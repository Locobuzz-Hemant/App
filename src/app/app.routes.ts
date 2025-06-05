import { Routes } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { TaskComponent } from './task-comp/task-comp.component';
import { AppComponent } from './app.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { ToDoComponent } from './to-do/to-do.component';

export const routes: Routes = [
  { path: '', component: NewComponentComponent },
  { path: 'about', component: NewComponentComponent },
  { path: 'task', component: TaskComponent },
  { path: 'Form', component: FormcomponentComponent },
  { path: 'ToDo', component: ToDoComponent },


];
