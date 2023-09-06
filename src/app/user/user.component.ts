import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Customer } from 'src/moduls/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  customer = new Customer();
  allUsers = [];
  currentUsers = [];
  public filtered = false;
  public loading = true;

  @ViewChild('inputUser') inputUser!: ElementRef;


  constructor(public dialog: MatDialog, private firestore: AngularFirestore, private router: Router, private route: ActivatedRoute,) {}


  ngOnInit(): void {
    this.firestore
      .collection('customers')
      .valueChanges({idField: 'customIdName'})
      .subscribe((changes: any) => {
        this.allUsers = changes;
      });

      setTimeout(() => {
        this.loading = false;
      }, 1000);
  }


  /**
   * Open the add user dialog
   *
   */
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }


  /**
   * Filter the users and save the results in local json
   *
   */
  filterUser() {
    this.filtered = true;
    let input = this.inputUser.nativeElement?.value.toLowerCase();

    let filter = this.allUsers.filter((obj: any) => {
      return  obj.firstName.toLowerCase().includes(input) || obj.lastName.toLowerCase().includes(input) ||
              obj.email.toLowerCase().includes(input) || obj.phone.toLowerCase().includes(input)
    })

    this.currentUsers = filter;

    if (input == '') {
      this.filtered = false;
    }
  }
}
