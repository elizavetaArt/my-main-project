import {Component, OnDestroy, OnInit} from '@angular/core';
import {InfoMoika} from '../../shared/models/Info-moika.model';
import {InfoMoikaService} from '../../shared/services/InfoMoika.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wfm-moika',
  templateUrl: './moika.component.html',
  styleUrls: ['./moika.component.scss']
})
export class MoikaComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  infoMoika: InfoMoika[] = [];
  isLoaded = false;

  constructor(private infoMoikaService: InfoMoikaService) { }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.infoMoikaService.getInfoMoika()
    ).subscribe((data: [InfoMoika[]]) => {
      this.infoMoika = data[0];
      this.isLoaded = true;
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
