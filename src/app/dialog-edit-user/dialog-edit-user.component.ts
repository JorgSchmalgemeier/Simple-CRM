import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/moduls/user.class';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})

export class DialogEditUserComponent implements OnInit {
  customer!: Customer;
  userId!: string;
  loading = false;
  birthDate!: Date;
  today = new Date();

  editUserForm = new FormGroup({
    firstNameForm: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-ZöÖüÜäÄß ]+$")]),
    lastNameForm: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-ZöÖüÜäÄß ]+$")]),
    birthDateForm: new FormControl('', [Validators.required]),
    phoneForm: new FormControl('', [Validators.required, Validators.pattern("^[0-9+ ]*$")]),
    emailForm: new FormControl('', [Validators.required, Validators.email,])
  });


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get firstNameForm() {
    return this.editUserForm.get('firstNameForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get lastNameForm() {
    return this.editUserForm.get('lastNameForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get birthDateForm() {
    return this.editUserForm.get('birthDateForm');
  }


  /**
   * Get the name input field from the form group to use form control
   *
   */
  get phoneForm() {
    return this.editUserForm.get('phoneForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get emailForm() {
    return this.editUserForm.get('emailForm');
  }


  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) {}


  ngOnInit() {
    this.birthDate = new Date(this.customer.birthDate);
  }


  /**
   * This function saves the edited user in firebase
   *
   */
  saveUser() {
    this.loading = true;
    this.firestore
      .collection('customers')
      .doc(this.userId)
      .update(this.customer.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close()
      });
  }
}
