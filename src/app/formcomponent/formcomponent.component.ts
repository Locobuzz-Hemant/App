import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formcomponent',
  imports: [FormsModule,CommonModule],
  templateUrl: './formcomponent.component.html',
  styleUrl: './formcomponent.component.scss'
})
export class FormcomponentComponent {
formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    alert('Form Submitted')    // You can send this to a backend or show it in the UI
  }
}
