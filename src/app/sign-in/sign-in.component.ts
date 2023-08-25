import { Component, ElementRef } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loading: Boolean = false;
  hideSignIn: Boolean = false;
  hide = true;

  signInForm = new FormGroup({
    emailForm: new FormControl('', [Validators.required,Validators.email,]),
    passwordForm: new FormControl('', [Validators.required])
  });

  constructor(public authService: AuthService) { }

  hideSignInLayout(): void {
    this.hideSignIn = true;
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get emailForm() {
    return this.signInForm.get('emailForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get passwordForm() {
    return this.signInForm.get('passwordForm');
  }
}
