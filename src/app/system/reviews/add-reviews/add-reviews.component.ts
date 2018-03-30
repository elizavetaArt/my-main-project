import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReviewsService} from '../../shared/services/reviews.service';
import {NgForm} from '@angular/forms';
import {Reviews} from '../../shared/models/reviews.model';

@Component({
  selector: 'wfm-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.scss']
})
export class AddReviewsComponent {

  @Output() onReviewsAdd = new EventEmitter<Reviews>();

  constructor(private reviewsService: ReviewsService) { }

  onSubmit(form: NgForm) {
    let {name, phone, message} = form.value;

    const reviews = new Reviews(name, phone, message);

    this.reviewsService.addReviews(reviews)
      .subscribe((reviews: Reviews) => {
        form.reset();
        this.onReviewsAdd.emit(reviews);
      });
  }

}
