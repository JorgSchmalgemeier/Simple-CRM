import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Review } from 'src/moduls/review.class';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { doc, deleteDoc } from 'firebase/firestore';
// import { initializeApp } from '@angular/fire/app';
// import { environment } from 'src/environments/environment';
// import { Firestore, getFirestore } from '@angular/fire/firestore';
// import { AnyObject } from 'chart.js/dist/types/basic';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent {
  review: Review = new Review();
  reviewDate!: Date;

  addReviewForm = new FormGroup({
    productForm: new FormControl('', [Validators.required]),
    ratingForm: new FormControl('', [Validators.required]),
    titleForm: new FormControl('', [Validators.required]),
    textForm: new FormControl('', [Validators.required]),
    dateForm: new FormControl('', [Validators.required]),
    customerNameForm: new FormControl('', [Validators.required])
  });


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get productForm() {
    return this.addReviewForm.get('productForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get ratingForm() {
    return this.addReviewForm.get('ratingForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get titleForm() {
    return this.addReviewForm.get('titleForm');
  }


  /**
   * Get the name input field from the form group to use form control
   *
   */
  get textForm() {
    return this.addReviewForm.get('textForm');
  }


   /**
   * Get the name input field from the form group to use form control
   *
   */
   get customerNameForm() {
    return this.addReviewForm.get('customerNameForm');
   }


    /**
   * Get the name input field from the form group to use form control
   *
   */
    get dateForm() {
      return this.addReviewForm.get('dateForm');
     }


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
