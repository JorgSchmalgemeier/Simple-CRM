import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/moduls/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();
  allUsers = [];
  currentUsers = [];
  public filtered = false;
  public loading = true;

  @ViewChild('inputUser') inputUser!: ElementRef;

  constructor(public dialog: MatDialog, private firestore: AngularFirestore, private router: Router, private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({idField: 'customIdName'})
      .subscribe((changes: any) => {
        console.log('Received changes from DB', changes)
        this.allUsers = changes;
        console.log(this.allUsers);
      });

      setTimeout(() => {
        this.loading = false;
      }, 1500);
  }


  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }


  filterUser() {
    this.filtered = true;
    let input = this.inputUser.nativeElement?.value.toLowerCase();

    let filter = this.allUsers.filter((obj: any) => {
      return  obj.firstName.toLowerCase().includes(input) || obj.lastName.toLowerCase().includes(input) ||
              obj.email.toLowerCase().includes(input) || obj.city.toLowerCase().includes(input)
    })

    this.currentUsers = filter;

    if (input == '') {
      this.filtered = false;
    }
  }
}
