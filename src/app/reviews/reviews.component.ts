import { Component, OnInit } from '@angular/core';
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

  review = new Review();

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
    }, 1500);
  }

  openDialog() {
    this.dialog.open(AddReviewComponent);
  }

  filterReviewsProductOne() {
    let result = this.reviewsService.reviewsProductOne.filter(
      (word: string | any[]) => word.includes('prodcut')
    );
    console.log(result);
  }
}
