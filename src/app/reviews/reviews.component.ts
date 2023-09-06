import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AddReviewComponent } from '../add-review/add-review.component';
import { Review } from 'src/moduls/review.class';
import { ReviewsService } from 'src/moduls/reviews.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  providers: [ReviewsService],
})

export class ReviewsComponent implements OnInit {
  panelOpenState = false;
  public loading = true;
  filteredOne = false;
  filteredTwo = false;
  filteredThree = false;

  @ViewChild('inputOne') inputOne!: ElementRef;
  @ViewChild('inputTwo') inputTwo!: ElementRef;
  @ViewChild('inputThree') inputThree!: ElementRef;


  review = new Review();
  public currentReviewsProductOne: any = [];
  public currentReviewsProductTwo: any = [];
  public currentReviewsProductThree: any = [];

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
    public reviewsService: ReviewsService
  ) {}


  ngOnInit() {
    this.reviewsService.subscribeAllReviews();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }


  /**
   * Opens the dialog to add a new review
   *
   */
  openDialog() {
    this.dialog.open(AddReviewComponent);
  }


  /**
   * Leed to the next function to filter the right product
   *
   * @param product - The product
   */
  initFilter(product: any) {
    if (product == 'one') {
      this.filteredOne = true;
      this.filterProductReviews(this.inputOne, this.reviewsService.reviewsProductOne);
    }
    if (product == 'two') {
      this.filteredTwo = true;
      this.filterProductReviews(this.inputTwo, this.reviewsService.reviewsProductTwo);
    }
    if (product == 'three') {
      this.filteredThree = true;
      this.filterProductReviews(this.inputThree, this.reviewsService.reviewsProductThree);
    }
  }


  /**
   * This function filters the list with the right product and shows just the filtered results
   *
   * @param inputField - The used input field
   * @param productJSON - The product the user would like to filter
   */
  filterProductReviews(inputField: any, productJSON: any) {
    let input = inputField.nativeElement?.value.toLowerCase();

    let filter = productJSON.filter((obj: any) => {
      return  obj.title.toLowerCase().includes(input) || obj.text.toLowerCase().includes(input) ||
              obj.costumerName.toLowerCase().includes(input)
    })

    this.setFilteredJson(productJSON, filter);
    this.showAllReviews(input, productJSON);
  }


  /**
   * This function sets the filtered json
   *
   * @param productJSON - The json the user would like to filter
   * @param filter - The result of the filter
   */
  setFilteredJson(productJSON: any, filter:any) {
    if (productJSON == this.reviewsService.reviewsProductOne) {
      this.currentReviewsProductOne = filter;
    }
    if (productJSON == this.reviewsService.reviewsProductTwo) {
      this.currentReviewsProductTwo = filter;
    }
    if (productJSON == this.reviewsService.reviewsProductThree) {
      this.currentReviewsProductThree = filter;
    }
  }


  /**
   * Show all reviews if the input field is empty
   *
   * @param input - The input field
   * @param productJSON - The json the user would like to filter
   */
  showAllReviews(input: any, productJSON: any) {
    if (input == '' && productJSON == this.reviewsService.reviewsProductOne) {
      this.filteredOne = false;
    }
    if (input == '' && productJSON == this.reviewsService.reviewsProductTwo) {
      this.filteredTwo = false;
    }
    if (input == '' && productJSON == this.reviewsService.reviewsProductThree) {
      this.filteredThree = false;
    }
  }


  /**
   * This function clears the input field
   *
   * @param product
   */
  clearInput(product: any) {
    if (product == 'one') {
      this.inputOne.nativeElement.value = '';
      this.filteredOne = false;
    }
    if (product == 'two') {
      this.inputTwo.nativeElement.value = '';
      this.filteredTwo = false;
    }
    if (product == 'three') {
      this.inputThree.nativeElement.value = '';
      this.filteredThree = false;
    }

    this.reviewsService.subscribeAllReviews();
  }
}
