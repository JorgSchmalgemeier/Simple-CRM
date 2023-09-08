import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Review } from 'src/moduls/review.class';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})

export class AddReviewComponent {
  review: Review = new Review();
  reviewDate!: Date;
  loading = false;
  today = new Date();


  addReviewForm = new FormGroup({
    productForm: new FormControl('', [Validators.required]),
    ratingForm: new FormControl('', [Validators.required]),
    titleForm: new FormControl('', [Validators.required]),
    textForm: new FormControl('', [Validators.required]),
    dateForm: new FormControl('', [Validators.required]),
    customerNameForm: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-ZöÖüÜäÄß ]+$")])
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


  /**
   * Start saving process and leed to the next function which will save the product is the right firebase collection
   *
   */
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


  /**
   * Save the review in the right firebase collection
   *
   * @param product - The name of the firebase collection
   */
  saveReviewForProduct(product: string) {
    this.setDate();
    this.firestore
      .collection(product)
      .add(this.review.reviewToJSON())
      .then((result: any) => {
        this.loading = false;
        this.closeDialog();
      });
  }


  /**
   * This function closes the add review dialog
   *
   */
  closeDialog() {
    this.dialogRef.close();
  }


  /**
   * This function get the day, month and year from the date and save it
   *
   */
  setDate() {
    this.review.day = new Date(this.review.date).getDate();
    this.review.month = new Date(this.review.date).getMonth() +1;
    this.review.year = new Date(this.review.date).getFullYear();
  }
}
