import {Component, Input, OnInit} from '@angular/core';
import {InfoMoika} from '../../../shared/models/Info-moika.model';

@Component({
  selector: 'wfm-form-polirovka',
  templateUrl: './form-polirovka.component.html',
  styleUrls: ['./form-polirovka.component.scss']
})
export class FormPolirovkaComponent implements OnInit {

  @Input() infoPolirovka: InfoMoika[] = [];

  constructor() { }

  ngOnInit() {
  }

}
