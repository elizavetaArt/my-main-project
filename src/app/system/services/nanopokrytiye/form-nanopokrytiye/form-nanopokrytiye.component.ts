import {Component, Input, OnInit} from '@angular/core';
import {InfoMoika} from '../../../shared/models/Info-moika.model';

@Component({
  selector: 'wfm-form-nanopokrytiye',
  templateUrl: './form-nanopokrytiye.component.html',
  styleUrls: ['./form-nanopokrytiye.component.scss']
})
export class FormNanopokrytiyeComponent implements OnInit {

  @Input() infoNanopokrytiye: InfoMoika[] = [];

  constructor() { }

  ngOnInit() {
  }

}
