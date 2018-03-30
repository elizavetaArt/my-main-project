import {Time} from './time.model';

export class Order {
  constructor(
    public services: string,
    public phone: string,
    public date: string,
    public time: Time,
    public name: string,
    public message?: string
  ) {}
}
