import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl,
  FormBuilder, 
  FormGroup, 
  Validators
} from '@angular/forms';

@Component({
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get formControl(): { [key: string]: AbstractControl} {
    return this.signUpForm.controls;
  }

  signUpFormSubmit() {
    console.log(this.signUpForm);
  }
}
