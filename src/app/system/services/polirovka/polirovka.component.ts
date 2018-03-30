import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {InfoMoika} from '../../../shared/models/Info-moika.model';
import {InfoMoikaService} from '../../../shared/services/InfoMoika.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wfm-polirovka',
  templateUrl: './polirovka.component.html',
  styleUrls: ['./polirovka.component.scss']
})
export class PolirovkaComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  infoPolirovka: InfoMoika[] = [];
  isLoaded = false;

  constructor(private infoMoikaService: InfoMoikaService) { }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.infoMoikaService.getInfoPolirovka()
    ).subscribe((data: [InfoMoika[]]) => {
      this.infoPolirovka = data[0];
      this.isLoaded = true;
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
