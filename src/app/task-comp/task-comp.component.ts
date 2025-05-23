import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-task-comp',
  imports: [FormsModule],
  templateUrl: './task-comp.component.html',
  styleUrl: './task-comp.component.scss'
})
export class TaskComponent {
  userInput: string = '';
}
