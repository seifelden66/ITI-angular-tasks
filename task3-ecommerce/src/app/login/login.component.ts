import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
  FormsModule
} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  profileForm = this.formBuilder.group({
    email: ['', [Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    password: ['', Validators.required],
  });
  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.router.navigate(['/']);
    }  }
}
