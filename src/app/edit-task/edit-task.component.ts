import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  template: `<button (click)="onEdit()">Edit</button>`,
})
export class EditTaskComponent {
  @Input() index!: number;
  @Output() edit = new EventEmitter<number>();

  onEdit() {
    this.edit.emit(this.index);
  }
}
