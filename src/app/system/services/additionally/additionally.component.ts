import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {InfoMoika} from '../../../shared/models/Info-moika.model';
import {InfoMoikaService} from '../../../shared/services/InfoMoika.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wfm-additionally',
  templateUrl: './additionally.component.html',
  styleUrls: ['./additionally.component.scss']
})
export class AdditionallyComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  infoAdditionally: InfoMoika[] = [];
  isLoaded = false;

  constructor(private infoMoikaService: InfoMoikaService) { }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.infoMoikaService.getInfoAdditionally()
    ).subscribe((data: [InfoMoika[]]) => {
      this.infoAdditionally = data[0];
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
