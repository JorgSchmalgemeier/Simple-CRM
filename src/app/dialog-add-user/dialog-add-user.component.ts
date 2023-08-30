import { Component } from '@angular/core';
import { User } from 'src/moduls/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  addUserForm = new FormGroup({
    firstNameForm: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-ZöÖüÜäÄß\s]+$")]),
    lastNameForm: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-ZöÖüÜäÄß\s]+$")]),
    birthDateForm: new FormControl('', [Validators.required]),
    phoneForm: new FormControl('', [Validators.required, Validators.pattern("^[0-9+]*$")]),
    emailForm: new FormControl('', [Validators.required, Validators.email,]),
    streetForm: new FormControl('', [Validators.required]),
    zipCodeForm: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    cityForm: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-ZöÖüÜäÄß\s]+$")])
  });


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get firstNameForm() {
    return this.addUserForm.get('firstNameForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get lastNameForm() {
    return this.addUserForm.get('lastNameForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get birthDateForm() {
    return this.addUserForm.get('birthDateForm');
  }


  /**
   * Get the name input field from the form group to use form control
   *
   */
  get phoneForm() {
    return this.addUserForm.get('phoneForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get emailForm() {
    return this.addUserForm.get('emailForm');
  }


  /**
   * Get the name input field from the form group to use form control
   *
   */
  get streetForm() {
    return this.addUserForm.get('streetForm');
  }


  /**
   * Get the name input field from the form group to use form control
   *
   */
  get zipCodeForm() {
    return this.addUserForm.get('zipCodeForm');
  }


  /**
   * Get the name input field from the form group to use form control
   *
   */
  get cityForm() {
    return this.addUserForm.get('cityForm');
  }


  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) {}

  user = new User();
  birthDate!: Date;
  loading = false;



  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user);
    this.loading = true;

    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => { //bei then wird etwas weiteres ausgeführt, nachdem add fertig ist
      console.log('Adding user finished', result);
      this.loading = false;
      this.closeDialog();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
