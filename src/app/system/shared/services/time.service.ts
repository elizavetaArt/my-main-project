import {Injectable} from '@angular/core';
import {BaseApi} from '../../../shared/core/base-api';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Time} from '../models/time.model';

@Injectable()
export class TimeService extends BaseApi {

  constructor(public http: Http) {
    super(http);
  }

  addTimes(): Observable<Time[]> {
    return this.get('times');
  }

  updateTime(timeObj: Time) {
    return this.http.put(`http://localhost:3000/times/${timeObj.id}`, timeObj)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

}
