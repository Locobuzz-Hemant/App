import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [NgIf, NgFor,RouterModule],
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent {
  showSkills = true;

  skills = [
    'Angular',
    'TypeScript',
    '.NET Core',
    'SQL Server',
    'HTML/CSS'
  ];

  toggleSkills() {
    this.showSkills = !this.showSkills;
  }
}
