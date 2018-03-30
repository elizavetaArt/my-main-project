import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {InfoMoika} from '../models/Info-moika.model';
import {BaseApi} from '../../../shared/core/base-api';

@Injectable()
export class InfoMoikaService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  getInfoMoika(): Observable<InfoMoika[]> {
    return this.get('moika');
  }

  getInfoPolirovka(): Observable<InfoMoika[]> {
    return this.get('polirovka');
  }

  getInfoCleaning(): Observable<InfoMoika[]> {
    return this.get('cleaning');
  }

  getInfoNanopokrytiye(): Observable<InfoMoika[]> {
    return this.get('nanopokrytiye');
  }

  getInfoAdditionally(): Observable<InfoMoika[]> {
    return this.get('additionally');
  }
}
