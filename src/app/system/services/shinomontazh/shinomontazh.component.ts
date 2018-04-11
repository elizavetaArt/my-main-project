import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Shinomontazh} from '../../../shared/models/shinomontazh.model';
import {ShinomontazhService} from '../../../shared/services/shinomontazh.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wfm-shinomontazh',
  templateUrl: './shinomontazh.component.html',
  styleUrls: ['./shinomontazh.component.scss']
})
export class ShinomontazhComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  infoShinomontazh: Shinomontazh[] = [];
  infoShinomontazh2: Shinomontazh[] = [];
  infoShinomontazh3: Shinomontazh[] = [];
  isLoaded = false;

  constructor(private shinomontazh: ShinomontazhService) {}

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.shinomontazh.getInfoShinomontazh(),
      this.shinomontazh.getInfoShinomontazhJ(),
      this.shinomontazh.getInfoShinomontazhN()
    ).subscribe((data: [Shinomontazh[]]) => {
      this.infoShinomontazh = data[0];
      this.infoShinomontazh2 = data[1];
      this.infoShinomontazh3 = data[2];
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
