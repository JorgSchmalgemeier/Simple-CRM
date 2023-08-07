import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/moduls/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();
  allUsers = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges()
      .subscribe((changes: any) => {
        console.log('Received changes from DB', changes)
        this.allUsers = changes;
        console.log(this.allUsers);
      });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
