import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ReviewsService {
  public reviewsProductOne: any = [];
  public reviewsProductTwo: any = [];
  public reviewsProductThree: any = [];

  constructor(private firestore: AngularFirestore) {}


   subscribeAllReviews() {
    this.subscribeReviews('reviewsProductOne');
    this.subscribeReviews('reviewsProductTwo');
    this.subscribeReviews('reviewsProductThree');
  }


  subscribeReviews(collection: string) {
    this.firestore
      .collection(collection)
      .valueChanges()
      .subscribe((changes: any) => {
        if (collection == 'reviewsProductOne') {
          this.reviewsProductOne = changes;
          this.sortByTimestamp(this.reviewsProductOne);
        }
        if (collection == 'reviewsProductTwo') {
          this.reviewsProductTwo = changes;
          this.sortByTimestamp(this.reviewsProductTwo);
        }
        if (collection == 'reviewsProductThree') {
          this.reviewsProductThree = changes;
          this.sortByTimestamp(this.reviewsProductThree);
        }
      });
  }

  sortByTimestamp(json: any) {
    json.sort((a: { date: number; }, b: { date: number; }) => a.date - b.date);
    console.log('Sortiertes JSON-Array:', json);
  }
}
