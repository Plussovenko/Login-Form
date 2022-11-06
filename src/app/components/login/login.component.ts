import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessService } from 'src/app/services/success.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private successService: SuccessService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/),
      ]),
    });
  }
  //RxJS
  submitLogin() {
    this.successService.logIn(this.loginForm.value).subscribe({
      next: () =>
        setTimeout(() => {
          this.router.navigate(['success']);
        }, 3000),
      error: (err) => alert(err.message),
    });
  }
}
