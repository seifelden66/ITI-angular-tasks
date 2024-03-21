import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  profileForm = this.formBuilder.group({
    email: ['', [Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    password: ['', Validators.required],
    fName:['', [Validators.minLength(11), Validators.required]],
    lName:['', [Validators.minLength(11), Validators.required]]

  });
  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.router.navigate(['/']);
    }
  }
}