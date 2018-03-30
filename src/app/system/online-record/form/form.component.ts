import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Time} from '../../shared/models/time.model';
import {NgForm} from '@angular/forms';
import {Order} from '../../shared/models/order.model';
import {OrderService} from '../../shared/services/order.service';
import {TimeService} from '../../shared/services/time.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wfm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  times: Time[] = [];
  s1: Subscription;

  service = [
    {id: 1, name: 'Мойка'},
    {id: 2, name: 'Химчистка'},
    {id: 3, name: 'Полировка'},
    {id: 4, name: 'Шиномонтаж'},
    {id: 5, name: 'Нано-покрытие'},
    {id: 6, name: 'Дополнительные услуги'}
  ];

  constructor(public orderService: OrderService,
              public timeService: TimeService) {
  }

  ngOnInit() {
    this.s1 = this.timeService.addTimes()
      .subscribe((responseTimes: Time[]) => {
        console.log(responseTimes);
        for (let i = 0; i < responseTimes.length; i++) {
          if (responseTimes[i].status === 'free') {
            this.times.push(responseTimes[i]);
          }
        }
        console.log(this.times);
      });
  }

  ngOnDestroy() {
    this.s1.unsubscribe();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const {date, message, name, phone, service, time} = form.value;
    console.log(time);
    const necessaryTime = this.times.find(c => c.id === +time);
    console.log(necessaryTime);
    const order: Order = new Order(service, phone, date, necessaryTime, name, message);
    console.log(order);


    let ordersServer: Order[] = [];
    this.orderService.getOrder()
      .subscribe((response: Order[]) => {
        ordersServer = response;
        let findOrder: Order;
        for (let i = 0; i < ordersServer.length; i++) {
          console.log(ordersServer[i].time.time);
          console.log(necessaryTime.time);
          console.log(ordersServer[i].date);
          console.log(date);
          if (ordersServer[i].time.time === necessaryTime.time && ordersServer[i].date === date) {
            findOrder = ordersServer[i];
          }
        }
        console.log(findOrder);
        if (findOrder !== undefined) {
          alert('Выбери другое вермя');
        } else {
          this.orderService.createOrder(order)
            .subscribe((response: any) => {
              alert('Ждем тебя');
            });
        }
      });

// -->{this.http.post('localhost:3000/orders', order);}

    // this.orderService.createOrder(order)
    //   .subscribe((response: any) => {
    //     this.timeService.updateTime(new Time(necessaryTime.time, 'notFree', necessaryTime.id));
    //     form.reset();
    //   });
  }

}
