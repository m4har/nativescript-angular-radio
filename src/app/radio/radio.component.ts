import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  moduleId: module.id,
})
export class RadioComponent implements OnInit {

  checkedData: number;

  constructor() { }

  ngOnInit() {
  }

  public data = new Array(
    {
      "id": 0,
      "data": "data 1",
    },
    {
      "id": 1,
      "data": "data 2",
    },
    {
      "id": 2,
      "data": "data 3",
    },
    {
      "id": 3,
      "data": "data 4",
    },
    {
      "id": 4,
      "data": "data 5",
    },
  )

}
