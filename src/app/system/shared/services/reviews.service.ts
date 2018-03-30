import {Injectable} from '@angular/core';
import {BaseApi} from '../../../shared/core/base-api';
import {Http} from '@angular/http';
import {Reviews} from '../models/reviews.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReviewsService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  addReviews(reviews: Reviews): Observable<Reviews> {
    return this.post('review', reviews);
  }

  getReviews(): Observable<Reviews[]> {
    return this.get('review');
  }
}
