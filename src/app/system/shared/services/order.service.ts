import {Injectable} from '@angular/core';
import {BaseApi} from '../../../shared/core/base-api';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Order} from '../models/order.model';

@Injectable()
export class OrderService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  createOrder(order: Order): Observable<any> {
    return this.post('orders', order);
  }

  getOrder(): Observable<Order[]> {
    return this.get('orders');
  }

  }


