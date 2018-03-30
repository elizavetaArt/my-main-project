import {Component, Input, OnInit} from '@angular/core';
import {InfoMoika} from '../../../shared/models/Info-moika.model';

@Component({
  selector: 'wfm-form-cleanning',
  templateUrl: './form-cleanning.component.html',
  styleUrls: ['./form-cleanning.component.scss']
})
export class FormCleanningComponent implements OnInit {

  @Input() infoCleaning: InfoMoika[] = [];

  constructor() { }

  ngOnInit() {
  }

}
