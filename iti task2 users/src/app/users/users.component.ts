import { Component } from '@angular/core';
import users from '../../assets/users.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FontAwesomeModule, NgClass, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  title = 'task2';
  data: any = users;
  filteredData: any = [];
  faCoffee = faStar;
  showButton: boolean = false;
  email: string = '';

  constructor() {
    this.filteredData = this.data;
  }

  searchByEmail(event: any) {
    this.email = event.target.value;
    if (!this.email.trim()) {
      this.filteredData = this.data;
      this.showButton = false;
    } else {
      this.filteredData = this.data.filter(
        (user: any) => user.email.includes(this.email),
        (this.showButton = true)
      );
    }
  }
  clear() {
    this.email = '';
  }
}
