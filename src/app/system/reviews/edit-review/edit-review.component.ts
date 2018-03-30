import {Component, Input, OnInit} from '@angular/core';
import {Reviews} from '../../shared/models/reviews.model';

@Component({
  selector: 'wfm-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.scss']
})
export class EditReviewComponent implements OnInit {

  @Input() reviews: Reviews[] = [];

  constructor() { }

  ngOnInit() {
  }

}
