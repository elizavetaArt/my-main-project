import {Component, OnDestroy, OnInit} from '@angular/core';
import {Time} from '../../shared/models/time.model';
import {TimeService} from '../../shared/services/time.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wfm-online-record',
  templateUrl: './online-record.component.html',
  styleUrls: ['./online-record.component.scss']
})
export class OnlineRecordComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  time: Time[] = [];
  isLoaded = false;

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.timeService.addTimes()
    ).subscribe((data: [Time[]]) => {
      this.time = data[0];
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
