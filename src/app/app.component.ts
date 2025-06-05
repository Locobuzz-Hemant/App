import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { ToDoComponent } from './to-do/to-do.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NewComponentComponent,Comp2Component,Comp3Component,FormcomponentComponent,ToDoComponent,EditTaskComponent,DeleteTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App';
}
