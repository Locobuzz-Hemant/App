import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  template: `<button (click)="onDelete()">Delete</button>`,
})
export class DeleteTaskComponent {
  @Input() index!: number;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.index);
  }
}
