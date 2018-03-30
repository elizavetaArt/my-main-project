import {Component, Input, OnInit} from '@angular/core';
import {InfoMoika} from '../../../shared/models/Info-moika.model';

@Component({
  selector: 'wfm-form-additionally',
  templateUrl: './form-additionally.component.html',
  styleUrls: ['./form-additionally.component.scss']
})
export class FormAdditionallyComponent implements OnInit {

  @Input() infoAdditionally: InfoMoika[] = [];

  constructor() { }

  ngOnInit() {
  }

}
