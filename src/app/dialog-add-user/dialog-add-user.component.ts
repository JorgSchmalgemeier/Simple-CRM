import { Component } from '@angular/core';
import { User } from 'src/moduls/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

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
