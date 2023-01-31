import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AuthenticationRoutingModule } from "./authentication-routing.module";

import { AuthenticationComponent } from "./authentication.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

@NgModule({
    declarations: [
        AuthenticationComponent,
        SignUpComponent, 
        SignInComponent,
        ResetPasswordComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        AuthenticationRoutingModule
    ]
})
export class AuthenticationModule {}