import { Component, OnInit } from "@angular/core";
import { 
    FormBuilder, 
    FormGroup, 
    Validators
} from "@angular/forms";

@Component({
    templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
    passwdResetForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.passwdResetForm = this.formBuilder.group({
            email: ['', Validators.required]
        })
    }

    get formControls() {
        return this.passwdResetForm.controls;
    }

    passwdResetFormSubmit() {
        console.log(this.passwdResetForm);
    }
}