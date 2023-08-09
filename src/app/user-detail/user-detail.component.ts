import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/moduls/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: string = '';
  user: User = new User();

  constructor(private Route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog) {}

  ngOnInit(): void {

      this.Route.params.subscribe((params) => {
        this.userId = params['id'];
        console.log('got id', this.userId);
        this.getUser();
  })
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
        console.log('retrieved user', this.user)
      });
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent); //DialogEditAdressComponent wird der var dialog zugewiesen und geöffnet
    dialog.componentInstance.user = new User(this.user);
    //der var user aus der DialogEditAddressComponent wir ein object (new User) zugewiesen mit this.user als paramter
    //so wird quasi eine Kopie des User objects erstellt
    //das ist wichtig, damit Änderungen in dem Edit Fenster nicht immer direkt übernommen werden, sondern erst dann wenn man sie auch speichert
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetails() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }
}
