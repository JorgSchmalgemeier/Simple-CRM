import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Review } from 'src/moduls/review.class';
import { doc, deleteDoc } from 'firebase/firestore';
import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { AnyObject } from 'chart.js/dist/types/basic';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent {
  review: Review = new Review();
  reviewDate!: Date;


  constructor(
    public dialogRef: MatDialogRef<AddReviewComponent>,
    private firestore: AngularFirestore
  ) {}

  loading = false;

  saveReview() {
    this.loading = true;
    this.review.date = this.reviewDate.getTime();

    if (this.review.product == 'Product One') {
      this.saveReviewForProduct('reviewsProductOne');
    }
    if (this.review.product == 'Product Two') {
      this.saveReviewForProduct('reviewsProductTwo');
    }
    if (this.review.product == 'Product Three') {
      this.saveReviewForProduct('reviewsProductThree');
    }
  }

  saveReviewForProduct(product: string) {
    this.setDate();
    this.firestore
      .collection(product)
      .add(this.review.reviewToJSON())
      .then((result: any) => {
        console.log('Adding review finished', result);
        this.loading = false;
        this.closeDialog();
      });
  }


  closeDialog() {
    this.dialogRef.close();
  }

  setDate() {
    this.review.day = new Date(this.review.date).getDate();
    this.review.month = new Date(this.review.date).getMonth() +1;
    this.review.year = new Date(this.review.date).getFullYear();
  }
}
