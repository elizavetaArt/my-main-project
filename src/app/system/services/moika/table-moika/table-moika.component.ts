import {Component, Input, OnInit} from '@angular/core';
import {InfoMoika} from '../../../shared/models/Info-moika.model';

@Component({
  selector: 'wfm-table-moika',
  templateUrl: './table-moika.component.html',
  styleUrls: ['./table-moika.component.scss']
})
export class TableMoikaComponent implements OnInit {

  @Input() infoMoika: InfoMoika[] = [];

  constructor() { }

  ngOnInit() {
  }

}
