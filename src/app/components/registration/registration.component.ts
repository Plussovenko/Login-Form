import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public selected: string = '';
  public answer: string = '';
  // regForm: FormGroup;

  public typeOfOrganization: string[] = [
    'commercial',
    'non-profit',
    'governmental',
  ];

  constructor() {}

  ngOnInit(): void {
    // this.regForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   phone: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/\+[0-9]{12}/),
    //   ]),
    //   newPassword: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/),
    //   ]),
    // type: new FormControl('', [Validators.required]),
    // number: new FormControl('', [
    //   Validators.required,
    //   Validators.pattern(/[0-9]{1,}/),
    // ]),
    // personDate: new FormControl('', [Validators.required]),
    // });
  }
  // submitReg() {
  //   console.log(this.regForm.value);
  // }
}
