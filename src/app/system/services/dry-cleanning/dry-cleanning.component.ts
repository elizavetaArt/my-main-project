import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {InfoMoika} from '../../shared/models/Info-moika.model';
import {InfoMoikaService} from '../../shared/services/InfoMoika.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wfm-dry-cleanning',
  templateUrl: './dry-cleanning.component.html',
  styleUrls: ['./dry-cleanning.component.scss']
})
export class DryCleanningComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  infoCleaning: InfoMoika[] = [];
  isLoaded = false;

  constructor(private infoMoikaService: InfoMoikaService) { }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.infoMoikaService.getInfoCleaning()
    ).subscribe((data: [InfoMoika[]]) => {
      this.infoCleaning = data[0];
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
