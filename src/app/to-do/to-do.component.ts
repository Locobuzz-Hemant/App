import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';



@Component({
  selector: 'app-to-do',
  imports: [FormsModule,NgIf,NgFor,EditTaskComponent,DeleteTaskComponent],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
task = { title: '', description: '' };
  tasks: any[] = [];
  editIndex: number = -1;

  addOrUpdateTask() {
    if (this.editIndex === -1) {
      this.tasks.push({ ...this.task });
    } else {
      this.tasks[this.editIndex] = { ...this.task };
      this.editIndex = -1;
    }
    this.task = { title: '', description: '' };
  }

  editTask(index: number) {
    this.task = { ...this.tasks[index] };
    this.editIndex = index;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    if (this.editIndex === index) {
      this.task = { title: '', description: '' };
      this.editIndex = -1;
    }
  }
}
