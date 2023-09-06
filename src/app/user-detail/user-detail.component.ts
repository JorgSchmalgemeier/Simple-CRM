import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/moduls/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  userId: string = '';
  customer: Customer = new Customer();
  public loading = true;

  constructor(private Route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog) {}


  ngOnInit(): void {

      this.Route.params.subscribe((params) => {
        this.userId = params['id'];
        this.getUser();

        setTimeout(() => {
          this.loading = false;
        }, 1000);
  })
  }

  /**
   * Get alls current users and subscribe all changes
   *
   */
  getUser() {
    this.firestore
      .collection('customers')
      .doc(this.userId)
      .valueChanges()
      .subscribe((customer: any) => {
        this.customer = new Customer(customer);
      });
  }


  /**
   * Open the edit adress dialog with the respective data
   *
   */
  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent); //DialogEditAdressComponent wird der var dialog zugewiesen und geöffnet
    dialog.componentInstance.customer = new Customer(this.customer);
    //der var user aus der DialogEditAddressComponent wir ein object (new User) zugewiesen mit this.user als paramter
    //so wird quasi eine Kopie des User objects erstellt
    //das ist wichtig, damit Änderungen in dem Edit Fenster nicht immer direkt übernommen werden, sondern erst dann wenn man sie auch speichert
    dialog.componentInstance.userId = this.userId;
  }


  /**
   * Open the edit user dialog with the respective data
   *
   */
  editUserDetails() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.customer = new Customer(this.customer);
    dialog.componentInstance.userId = this.userId;
  }
}
