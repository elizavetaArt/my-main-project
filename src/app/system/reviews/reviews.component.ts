import { Component, OnInit } from '@angular/core';
import {Reviews} from '../shared/models/reviews.model';
import {ReviewsService} from '../shared/services/reviews.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wfm-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: Reviews[] = [];
  isLoaded = false;

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit() {
    Observable.combineLatest(
      this.reviewsService.getReviews()
    ).subscribe((data: [Reviews[]]) => {
          this.reviews = data[0];
          this.isLoaded = true;
        });
  }

  newReviewsAdded(reviews: Reviews) {
    this.reviews.push(reviews);
  }

}
