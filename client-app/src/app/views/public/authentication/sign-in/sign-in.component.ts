import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl,
  FormBuilder, 
  FormGroup, 
  Validators
} from '@angular/forms';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get formControls(): { [key: string]: AbstractControl} {
    return this.signInForm.controls;
  }

  signInFormSubmit() {
    console.log(this.signInForm);
  }
}
