import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {InfoMoika} from '../../shared/models/Info-moika.model';
import {InfoMoikaService} from '../../shared/services/InfoMoika.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wfm-nanopokrytiye',
  templateUrl: './nanopokrytiye.component.html',
  styleUrls: ['./nanopokrytiye.component.scss']
})
export class NanopokrytiyeComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  infoNanopokrytiye: InfoMoika[] = [];
  isLoaded = false;

  constructor(private infoMoikaService: InfoMoikaService) { }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.infoMoikaService.getInfoNanopokrytiye()
    ).subscribe((data: [InfoMoika[]]) => {
      this.infoNanopokrytiye = data[0];
      this.isLoaded = true;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
