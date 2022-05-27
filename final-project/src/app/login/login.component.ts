import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  elegantForm: FormGroup;

  currentYear = new Date().getFullYear();

  constructor(
    public fb: FormBuilder,
    private router: Router
    ) {
    this.elegantForm = fb.group({
      elegantFormUsernameEx: ['', Validators.required],
      elegantFormPasswordEx: ['', Validators.required],
    });
  }

  login() {
    let username: string = this.elegantForm.controls['elegantFormUsernameEx'].value;
    sessionStorage.setItem('username', username);
    this.router.navigate(['/main']);
  }
}